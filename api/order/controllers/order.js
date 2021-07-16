"use strict";

const stripe = require("stripe")(
  "sk_test_51JDg2wAKF2ZF4h4E1wVTPh6ZzXL84lRO2L3gJsOp3eineX4KQcHveh2y1DMQwolPNUwcUTxYmZLf58M2oXXD6OU5008Ff07LM0"
);

module.exports = {
  async create(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;

    let totalPayment = 0;
    products.forEach((product) => {
      totalPayment = totalPayment + product.price;
    });

    const charge = await stripe.charges.create({
      amount: totalPayment * 100,
      currency: "eur",
      source: token.id,
      description: `ID Usuario: ${idUser}`,
    });

    const createOrder = [];
    for await (const product of products) {
      const data = {
        game: product.id,
        user: idUser,
        totalPayment,
        idPayment: charge.id,
        addressShipping,
      };
      const validData = await strapi.entityValidator.validateEntityCreation(
        strapi.models.order,
        data
      );
      const entry = await strapi.query("order").create(validData);
      createOrder.push(entry);
    }
    return createOrder;
  },
};
