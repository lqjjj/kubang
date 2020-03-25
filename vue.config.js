module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api':{
                target:'http://121.40.239.56/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
