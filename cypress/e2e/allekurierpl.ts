/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit allekurier.pl", () => {
  cy.visit("/");
});

Then("I should see a title", () => {
  cy.contains('Tanie przesyłki kurierskie');
});