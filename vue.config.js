module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8866",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true,
    port: 8099,
    open: true
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.resolve.alias.set("@", resolve("src"));
    
  }
};

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
