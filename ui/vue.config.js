module.exports = {
  devServer: {
    proxy: {
      '/fn': {
        target: 'http://localhost:4141',
        changeOrigin: true
      }
    }
  }
}
