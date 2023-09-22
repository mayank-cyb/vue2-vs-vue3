const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv').config();


console.log(defineConfig);

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        //data: `@import "@/styles/variables_walmart.scss";`
        // additionalData: (client) => {
        //   if (client === 'Walmart') {
        //     return `@import "@/styles/variables_walmart.scss";`
        //   } else if (client === 'Walmart') {
        //     return `@import "@/styles/variables_icici.scss";`
        //   }
        // }
        additionalData: `@import "@/styles/variables_walmart.scss";`
      }
    }
  }
})