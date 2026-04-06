module.exports = {
  async woocommerce(ctx) {

    console.log("Webhook recibido");

    ctx.send({
      ok: true
    });

  }
};