import mercadopago from "mercadopago";
// Agrega credenciales
import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
mercadopago.configure({
  access_token:
    "TEST-7008670002521059-100302-519578625e5c99d54cf860450a8d8df3-834607133",
});

const ipn = asyncHandler(async (req, res) => {

 // const order = await Order.findById(req.params.id);




  //console.log(req.query);
  //console.log(req.body);


    if (req.query.type=== 'payment') {

     // const order = await Order.findById(req.params.id);


        const cosa = "data.id"
        const paymentId = req.query['data.id']
      //  console.log('paymentId');
        //console.log('PAYMENT',paymentId);

     const payment = await mercadopago.payment.get(paymentId)   
     const order = await Order.findById(payment.body.external_reference);

     //console.log('PAYMENT',payment.body.external_reference);

     //console.log(order);

     if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      //paument result viene de paypal 
  
      const updatedOrder = await order.save();
      //res.json(updatedOrder);
    } else {
      //res.status(404);
      throw new Error("Order not found");
    }


    }
 
});

export { ipn };