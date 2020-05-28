module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api':{
                target:'https://www.coupon580.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
                headers: {
                    Referer: 'https://www.coupon580.com'
                },
                https:true,
                secure: false,
            }
        }
    }
}
