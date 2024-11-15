const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const PORT = 3198;

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:3199",
    changeOrigin: true,
    pathRewrite: {
      "^/auth": "",
    },
  })
);

app.use(
  "/task",
  createProxyMiddleware({
    target: "http://localhost:3200",
    changeOrigin: true,
    pathRewrite: {
      "^/task": "",
    },
  })
);

app.listen(PORT, () => {
  console.log(`Main server is running on port ${PORT}`);
});
