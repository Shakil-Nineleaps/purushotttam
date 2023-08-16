// import '@cypress-audit/lighthouse/commands'
const { defineConfig } = require("cypress");
// async function setupNodeEvents(on, config){
//   return config
// }
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
// const { pa11y } = require("@cypress-audit/pa11y");



module.exports = defineConfig({

  e2e: {
      baseUrl: "http://localhost:3000",
  setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

  on('task', {
    lighthouse: lighthouse(), // calling the function is important
  })
     
    },
      specPattern:'cypress/test/demo.js'
  

}
});
