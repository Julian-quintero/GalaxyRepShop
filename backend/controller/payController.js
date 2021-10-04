import mercadopago from "mercadopago";
// Agrega credenciales
import asyncHandler from "express-async-handler";
mercadopago.configure({
  access_token:
    "TEST-7008670002521059-100302-519578625e5c99d54cf860450a8d8df3-834607133",
});

const payment = asyncHandler(async (req, res) => {
  let preference = {
    external_reference: '1234',
    notification_url:`https://49ea-179-15-47-71.ngrok.io/api/payments/mercadopago/ipn`,
    items: [
        {
            title: "Mi producto",
            unit_price: 10000,
            quantity: 1,
          },
          {
            title: "Mi producto2",
            unit_price: 10000,
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
