const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/v2',
    createProxyMiddleware({
      target: 'http://www.mocky.io',
      secure:false,
      changeOrigin: true,
    })
  );
};