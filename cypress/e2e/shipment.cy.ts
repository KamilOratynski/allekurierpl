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

        cy.get('.col-span-4 > .grid > :nth-child(1) > .flex').click();
        cy.get('.input').eq(0).type(weight);
        cy.get('.input').eq(1).type(lengthP);
        cy.get('.input').eq(2).type(width);
        cy.get('.input').eq(3).type(height);
        cy.get('.input').eq(4).type(insurance);
        cy.get('.input').eq(5).type(sendingCountry);
        cy.get('.input').eq(6).type(pickupCountry);
        cy.get('.button').contains('Wyceń przesyłkę').click();

        cy.contains('Sprawdź oferty firm kurierskich dla podanych parametrów przesyłki');
        cy.contains('Znaleziono ofert: 6');
    });

    it('Check if courier companies contain all attributes', () => {
        cy.visit('/');

        cy.get('.col-span-4 > .grid > :nth-child(1) > .flex').click();
        cy.get('.input').eq(0).type(weight);
        cy.get('.input').eq(1).type(lengthP);
        cy.get('.input').eq(2).type(width);
        cy.get('.input').eq(3).type(height);
        cy.get('.input').eq(4).type(insurance);
        cy.get('.input').eq(5).type(sendingCountry);
        cy.get('.input').eq(6).type(pickupCountry);
        cy.get('.button').contains('Wyceń przesyłkę').click();

        cy.get('#form-results > :nth-child(4)').contains('List przewozowy: Drukuje i nakleja nadawca');
        cy.get('#form-results > :nth-child(4)').contains('Ubezpieczenie: Darmowe do 1000 zł');
        cy.get('#form-results > :nth-child(4)').contains('Darmowe powiadomienia e-mail');
        cy.get('#form-results > :nth-child(4)').contains('Możliwość nadania w dowolnym punkcie DPD Pickup lub w automacie DPD (wymagana aplikacja)');
        cy.get('#form-results > :nth-child(4)').contains('Szacowany czas doręczenia');
    });

    it('Check if letter in courier envelope has the same attributes', () => {
        cy.visit('/');

        cy.get('.col-span-4 > .grid > :nth-child(2) > .flex').click();
        cy.get('.input').eq(0).clear().type(weight);
        cy.get('.input').eq(1).clear().type(lengthP);
        cy.get('.input').eq(2).clear().type(width);
        cy.get('.input').eq(3).clear().type(height);
        cy.get('.input').eq(4).clear().type(sendingCountry);
        cy.get('.input').eq(5).clear().type(pickupCountry);
        cy.get('.button').contains('Wyceń przesyłkę').click();

        cy.get('.order-4 > .button').eq(0).click();
        cy.contains('Waga i wymiary').parent().contains(weight + ' kg ' + lengthP + ' cm x ' + width + ' cm x ' + height + ' cm');
    });
});