/// <reference types="cypress" />

const weight = '1';
const lengthP = '10';
const width = '10';
const height = '10';
const insurance = '0';
const sendingCountry = '43300';
const pickupCountry = '30149';

describe('E2E tests - shipment', () => {
    it('Check if 6 offers have been found', () => {
        cy.visit('/');

        cy.definePackage(weight, lengthP, width, height, insurance, sendingCountry, pickupCountry);
        cy.get('.button').contains('Wyceń przesyłkę').click();

        cy.contains('Sprawdź oferty firm kurierskich dla podanych parametrów przesyłki');
        cy.contains('Znaleziono ofert: 6');
    });

    it('Check if courier companies contain all attributes', () => {
        cy.visit('/');

        cy.definePackage(weight, lengthP, width, height, insurance, sendingCountry, pickupCountry);
        cy.get('.button').contains('Wyceń przesyłkę').click();

        cy.get('#form-results > :nth-child(4)')
            .contains('List przewozowy: Drukuje i nakleja nadawca');
        cy.get('#form-results > :nth-child(4)')
            .contains('Ubezpieczenie: Darmowe do 1000 zł');
        cy.get('#form-results > :nth-child(4)')
            .contains('Darmowe powiadomienia e-mail');
        cy.get('#form-results > :nth-child(4)')
            .contains('Możliwość nadania w dowolnym punkcie DPD Pickup lub w automacie DPD (wymagana aplikacja)');
        cy.get('#form-results > :nth-child(4)')
            .contains('Szacowany czas doręczenia');
    });

    it('Check if letter in courier envelope has the same attributes', () => {
        cy.visit('/');

        cy.defineLetter(weight, lengthP, width, height, sendingCountry, pickupCountry);
        cy.get('.button').contains('Wyceń przesyłkę').click();

        cy.get('.order-4 > .button').eq(0).click();
        cy.contains('Waga i wymiary').parent()
            .contains(weight + ' kg ' + lengthP + ' cm x ' + width + ' cm x ' + height + ' cm');
    });
});