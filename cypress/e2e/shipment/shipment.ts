/// <reference types="cypress" />

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const weight = '1';
const length = '10';
const width = '10';
const height = '10';

Given("I visit allekurier.pl page", () => {
    cy.visit('/');
    cy.contains('Tanie przesyłki kurierskie');
    cy.contains('Porównaj oferty firm kurierskich i wysyłaj tak, jak lubisz');
    cy.contains('Rodzaj przesyłki');
});

When("I enter the attributes for package", () => {
    cy.get('.input').eq(0).type(weight);
    cy.get('.input').eq(1).type(length);
    cy.get('.input').eq(2).type(width);
    cy.get('.input').eq(3).type(height);
    cy.get('.input').eq(4).type('0');
    cy.get('.input').eq(5).type('43300');
    cy.get('.input').eq(6).type('30149');
});

When("I click on Wyceń przesyłkę", () => {
    cy.get('.button').contains('Wyceń przesyłkę').click();
});

Then("I check that there are 6 offers", () => {
    cy.contains('Sprawdź oferty firm kurierskich dla podanych parametrów przesyłki');
    cy.contains('Znaleziono ofert: 6');
});

Then("I check that courier companies include all attributes", () => {
    cy.get('#form-results > :nth-child(4)').contains('List przewozowy: Drukuje i nakleja nadawca');
    cy.get('#form-results > :nth-child(4)').contains('Ubezpieczenie: Darmowe do 1000 zł');
    cy.get('#form-results > :nth-child(4)').contains('Darmowe powiadomienia e-mail');
    cy.get('#form-results > :nth-child(4)').contains('Możliwość nadania w dowolnym punkcie DPD Pickup lub w automacie DPD (wymagana aplikacja)');
    cy.get('#form-results > :nth-child(4)').contains('Szacowany czas doręczenia');
});

When("I enter the attributes for letter in courier envelope", () => {
    cy.get('.col-span-4 > .grid > :nth-child(2) > .flex').click();
    cy.get('.input').eq(0).clear().type(weight);
    cy.get('.input').eq(1).clear().type(length);
    cy.get('.input').eq(2).clear().type(width);
    cy.get('.input').eq(3).clear().type(height);
    cy.get('.input').eq(4).clear().type('43300');
    cy.get('.input').eq(5).clear().type('30149');
});

Then("I check that letter in courier envelope has the same attributes", () => {
    cy.get('.order-4 > .button').eq(0).click();
    cy.get('.px-6').contains(weight + ' kg ' + length + ' cm x ' + width + ' cm x ' + height + ' cm');
});