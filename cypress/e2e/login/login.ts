/// <reference types="cypress" />

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const tooShortPasswordTest = 'a';

Given("I visit allekurier.pl page", () => {
    cy.visit('/');
    cy.contains('Moje konto');
});

When("I go to login form", () => {
    cy.contains('Moje konto').click();
    cy.contains('Zaloguj się').click();
});

Then("Check that form has all attributes", () => {
    cy.contains('Zaloguj się do AlleKurier');
    cy.contains('E-mail');
    cy.contains('Hasło');
    cy.contains('Nie pamiętasz hasła?');
    cy.contains('Zaloguj się');
    cy.contains('Nie masz konta? Załóż konto');
    cy.contains('Twoje dane są bezpieczne');
});

When("I try to log in with correct login", () => {
    cy.contains('Moje konto').click();
    cy.contains('Zaloguj się').click();
    cy.get('.input').eq(0).type(Cypress.env('login'));
    cy.get('.input').eq(1).type(Cypress.env('password'));
    cy.get('.button.w-full').contains('Zaloguj się').click();
});

Then("I should be logged in", () => {
    cy.contains('Moje konto').click();
    cy.get('.pb-3').contains('Przesyłki');
    cy.get('.pb-3').contains('Transakcje');
    cy.get('.absolute.top-0.left-0.-z-10.w-full.rounded-3xl.bg-white.px-6.pt-16.pb-3.text-center.shadow-md.transform.opacity-100.scale-100').contains('Wyloguj się').click();
    cy.contains('Nastąpiło poprawne wylogowanie z systemu');
});

When("I try to log in with invalid login", () => {
    cy.contains('Moje konto').click();
    cy.contains('Zaloguj się').click();
    cy.contains('Zaloguj się do AlleKurier');
    cy.get('.input').eq(0).type('invalidlogin@gmail.com');
    cy.get('.input').eq(1).type('invalidpassword');
    cy.get('.button.w-full').contains('Zaloguj się').click();
});

Then("I should not be logged in", () => {
    cy.get('form').contains('Wprowadź poprawny E-mail');
    cy.get('form').contains('Wprowadź poprawny Hasło');
    cy.get('form').contains('Niepoprawny e-mail lub hasło');
});

When("I try to log in with too short password", () => {
    cy.contains('Moje konto').click();
    cy.contains('Zaloguj się').click();
    cy.contains('Zaloguj się do AlleKurier');
    for (let i = 0; i < 7; i++) {
        cy.get('.input').eq(1).type(tooShortPasswordTest);
        cy.get('.button.w-full').contains('Zaloguj się').click();
        cy.get('form').contains('Hasło musi mieć przynajmniej 8 znaków');
    }
    cy.get('.input').eq(1).type('1');
});

Then("I should not log in without e-mail", () => {
    cy.get('form').contains('Pole jest wymagane');
});