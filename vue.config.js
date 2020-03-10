module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api':{
                target:'localhost:3000/store',
                changeOrigin: true
            }
        }
    }
}
