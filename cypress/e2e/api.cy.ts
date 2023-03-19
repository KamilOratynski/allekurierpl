/// <reference types="cypress" />

let bearerToken: string;

describe('API tests - login', () => {
    it('POST /user/login endpoint', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('apiUrl') + 'user/login',
            body:
            {
                "email": Cypress.env('login'),
                "password": Cypress.env('password')
            }
        }).as('token');

        cy.get('@token').its('status').should('eq', 200);
        cy.get('@token').then((response) => {
            bearerToken = response.body.token;
        });
    });

    it('GET /user/me endpoint', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('apiUrl') + 'user/me',
            headers: {
                authorization: 'Bearer ' + bearerToken
            }
        }).as('login');

        cy.get('@login').its('status').should('eq', 200);
        cy.get('@login').then((response) => {
            expect(response.body.data.email).to.equal(Cypress.env('login'));
        })
    });
});