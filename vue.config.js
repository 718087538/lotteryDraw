module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
              rootValue: 32, // 换算的基数(设计图750的根字体为32)
              selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
              propList: ['*']
            })
          ]
        }
      }
    },
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
      }
    }
  }