const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译,启动项目之后packages也会被打包编译执行
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
      config.module
      .rule('dotmd')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        ...(config.module.rules.get('vue').uses.get('vue-loader').get('options') || null) // 与 vue-loader 配置保持一致
      })
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader')
      .options({
        dest: true,
        markdown: {
          options: {
            html: true
          }
        }
      })
      .end()
    }
}
