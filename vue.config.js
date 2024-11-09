const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? '/aun-satang/' : '/'
  base: '/my-app/',
  publicPath: '/aun-satang/'
})

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' ? '/aun-satang/' : '/'
// }