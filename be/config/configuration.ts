export default () => ({
  port: 3000,
  shopify: {
    shop: process.env.SHOPIFY_SHOP,
    url: process.env.BACKEND_URL,
    apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
    storefrontKey: process.env.SHOPIFY_STOREFRONT_KEY
  },
});
