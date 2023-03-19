import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://nowy.allekurier.pl/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    hideXHRInCommandLog: true,
    apiUrl: "https://api.allekurier.pl/",
    login: "testkurier2@gmail.com",
    password: "kurier2test"
  },
  blockHosts: ["consent.cookiebot.com", "consentcdn.cookiebot.com"],
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false
});
