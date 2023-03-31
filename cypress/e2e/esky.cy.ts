/// <reference types="cypress" />

describe('Simple tests - esky', () => {
    it('Simple test', () => {
        cy.visit('https://www.esky.pl/okazje/0/0/ci/fnc/funchal');

        cy.get('.button-wrapper > .btn').contains('4 okazje').click();

        cy.get('.offers').should('not.be.visible');
    });

    it('Check if there is a selector that is visible for a while', () => {
        cy.visit('https://www.esky.pl/noclegi/details?arrivalLat=50.2862638&arrivalLon=19.1040791' +
            '&arrivalCode=35174&arrivalType=city&rangeStartDate=2023-05-17&rangeEndDate=2023-05-17' +
            '&isFlexSearch=false&stayLength=1,1&rooms[0][adults]=2&checkInDate=2023-05-17' +
            '&checkOutDate=2023-05-18&metaCode=543815');

        cy.get('.rooms-pax-wrapper > .btn').click();

        cy.get('.arcs').should('be.visible');
    });
});
