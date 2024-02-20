import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    //baseUrl: 'https://play1.automationcamp.ir',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      stage: "https://stage.pasv.us",
      prod: "https://coding.pasv.us/course",
      test: "Hello World!",
      demoQA: "https://demoqa.com",
      play1: "https://play1.automationcamp.ir/expected_conditions.html",
      email: "R.a.israfilov@gmail.com", //*         stage.pasv.us
      password: "12345678",             //!Пароль к stage.pasv.us
    },
  },
  //  viewportWidth: 900,     //* Ширина, высота
  //  viewportHeight: 1200,

  // retries: {           //* Запускать 2 раза
  //     runMode: 2,
  //     openMode: 2,
  //   },
  defaultCommandTimeout: 16000,
});
