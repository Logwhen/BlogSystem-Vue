// vue.config.js
const path = require('path');
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    outputDir: '../TogetherCordova/www',
    lintOnSave: false,
    productionSourceMap: false,
    // devtool: '#source-map',
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('@', resolve('./'))
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
    },
    // webpack-dev-server 相关配置  
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    devServer: {
        // port: 8080,
        proxy: {
            '/api': {
              target: 'http://121.199.79.177:9999/api', //对应自己的接口
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                '^/api': ''
              },
              headers: {
                token: 'token'
              }
            }
          }
    },
    // css: {
    //     extract: true,
    //     sourceMap: false,
    //     loaderOptions: {
    //       css: {},
    //       postcss: {}
    //     },
    //     modules: false
    //   },
    //   parallel: require('os').cpus().length > 1,
    //   pwa: {},
    //   pluginOptions: {},

}