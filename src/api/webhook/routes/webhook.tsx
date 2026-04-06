module.exports = {
  routes: [
    {
      method: "POST",
      path: "/webhooks/woocommerce",
      handler: "webhook.woocommerce",
      config: {
        auth: false
      }
      
    },
     {
      method: "GET",
      path: "/webhooks/woocommerce",
      handler: "webhook.woocommerce",
      config: {
        auth: false
      }
      
    }
  ]
};