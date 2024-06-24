const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    // Evita fallos en los tests provocados por medidas de seguridad del explorador
    //defaultCommandTimeout: 2000,
    // TImeout configurado por defecto en todas las ejecuciones (a menos que indiquemos una distinta en una función)
    numTestsKeptInMemory: 10,
    // Número máximo de tests guardados en memoria al ejecutar un archivo de tests desde el test runner
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
