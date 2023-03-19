/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.contains('Moje konto').click();
    cy.contains('Zaloguj się').click();
})

Cypress.Commands.add('package', (weight: string, length: string, width: string, height: string, insurance: string, sendingCountry: string, pickupCountry: string) => {
    cy.get('.col-span-4 > .grid > :nth-child(1) > .flex').click();
    cy.get('.input').eq(0).type(weight);
    cy.get('.input').eq(1).type(length);
    cy.get('.input').eq(2).type(width);
    cy.get('.input').eq(3).type(height);
    cy.get('.input').eq(4).type(insurance);
    cy.get('.input').eq(5).type(sendingCountry);
    cy.get('.input').eq(6).type(pickupCountry);
})

Cypress.Commands.add('letter', (weight: string, length: string, width: string, height: string, sendingCountry: string, pickupCountry: string) => {
    cy.get('.col-span-4 > .grid > :nth-child(2) > .flex').click();
    cy.get('.input').eq(0).clear().type(weight);
    cy.get('.input').eq(1).clear().type(length);
    cy.get('.input').eq(2).clear().type(width);
    cy.get('.input').eq(3).clear().type(height);
    cy.get('.input').eq(4).clear().type(sendingCountry);
    cy.get('.input').eq(5).clear().type(pickupCountry);
})