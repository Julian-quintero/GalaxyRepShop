import mercadopago from "mercadopago";
// Agrega credenciales
import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
mercadopago.configure({
  access_token:
    "TEST-7008670002521059-100302-519578625e5c99d54cf860450a8d8df3-834607133",
});

const payment = asyncHandler(async (req, res) => {

  let orderId


 const {
  orderItems,
  shippingAddress,
  paymentMethod,
  itemsPrice,
  taxPrice,
  shippingPrice,
  totalPrice,
} = req.body;


try {

  if (orderItems && orderItems.length === 0) {
    //res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
  
    const createdOrder = await order.save();
    orderId = (createdOrder._id).toString()  
    //res.status(201).json(createdOrder);
  }
  
  
} catch (error) {
  console.log('error at create order',error)
  throw new Error("Couldn't create order");
  
}



 const total = (itemsPrice * 0.15 + itemsPrice).toFixed(2)

  let preference = {
    external_reference: orderId,
    notification_url:`https://525e-179-15-47-71.ngrok.io/api/payments/mercadopago/ipn`,
    back_urls:{
      'success':"www.google.com"
    },
    items: [
    
          {
            title:"Items galaxy shop (COP currency)",
            unit_price: Math.floor(total)*3780,
            quantity: 1,
          },
         
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
      // global.id = response.body.id;


      res.json({
        idpago: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

export { payment };
