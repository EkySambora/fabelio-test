const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    'http://www.mocky.io/v2/5c9105cb330000112b649af8',
    createProxyMiddleware({
      target: 'https://ekysambora.github.io/fabelio-test',
      changeOrigin: true,
    })
  );
};