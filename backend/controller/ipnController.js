import mercadopago from "mercadopago";
// Agrega credenciales
import asyncHandler from "express-async-handler";
mercadopago.configure({
  access_token:
    "TEST-7008670002521059-100302-519578625e5c99d54cf860450a8d8df3-834607133",
});

const ipn = asyncHandler(async (req, res) => {

    console.log(req.query);


    if (req.query.type=== 'payment') {

        console.log('me pagaron');
        const cosa = "data.id"
        const paymentId = req.query['data.id']
        console.log('PAYMENT',paymentId);

     const payment = await mercadopago.payment.get(paymentId)

     console.log(payment);


    }
 
});

export { ipn };