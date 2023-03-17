import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      hideXHRInCommandLog: true,
    },
    baseUrl: "https://nowy.allekurier.pl/",
    blockHosts: ["consent.cookiebot.com", "consentcdn.cookiebot.com"],
    viewportWidth: 1366,
    viewportHeight: 768
  }
});
