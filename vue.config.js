module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Shopio Ecommerce'
      return args
    })
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/_vars.scss";`
      }
    }
  }
}
