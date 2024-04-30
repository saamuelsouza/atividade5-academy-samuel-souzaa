const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrlBackEnd: "https://rarocrud-80bf38b38f1f.herokuapp.com",
      baseUrlFrontend: "https://rarocrud-frontend-88984f6e4454.herokuapp.com",
    },
  },
});