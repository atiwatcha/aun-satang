// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   // transpileDependencies: true,
//   publicPath: process.env.NODE_ENV === 'production' ? '/aun-satang/' : '/'
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/aun-satang/'  // Replace with your repository name
    : '/'
}