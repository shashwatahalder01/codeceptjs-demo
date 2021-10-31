const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.saucedemo.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    homePage: './pages/homePage.js',
    
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    stepByStepReport:{
      enabled: true,
      screenshotsForAllureReport: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    },
  }
}