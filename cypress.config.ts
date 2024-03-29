import { defineConfig } from "cypress";
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path");
require("dotenv").config();

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    //baseUrl: 'https://play1.automationcamp.ir',
    setupNodeEvents(on, config) {
      //!  reporter = 'cypress-mochawesome-reporter'
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
      //! reading excel document from fixture
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env: {
      herokuapp: "https://the-internet.herokuapp.com",
      stage: "https://stage.pasv.us",
      prod: "https://coding.pasv.us/course",
      test: "Hello World!",
      demoQA: "https://demoqa.com",
      play1: "https://play1.automationcamp.ir/expected_conditions.html",
      email: "R.a.israfilov@gmail.com", //*         stage.pasv.us
      password: "12345678", //!Пароль к stage.pasv.us
    },
  },
  //  viewportWidth: 900,     //* Ширина, высота
  //  viewportHeight: 1200,

  retries: {
    runMode: 2, //* Запускать 2 раза
    openMode: 2,
  },
  defaultCommandTimeout: 16000,

  video: false,
  screenshotOnRunFailure: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
