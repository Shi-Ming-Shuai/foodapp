const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use("/api",
      createProxyMiddleware({
          target: 'http://localhost:9000',
          changeOrigin: true,
          pathRewrite: {
            // 然后把/api替换为""，就变成了http://127.0.0.1:8888/XXXX
              "^/api": ""
          }
      })
  )

}