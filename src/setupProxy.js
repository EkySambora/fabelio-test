const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ekysambora.github.io/fabelio-test',
      changeOrigin: true,
    })
  );
};