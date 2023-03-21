/// <reference types="cypress" />

describe('E2E tests - courier order test', () => {
  it('Courier order form test', () => {
    const regex = new RegExp(/\d+,\d+/);
    var inPostPrice: String[];
    var tablePrice: String[];

    cy.visit('/');
    cy.get('.input').eq(0).type('5');
    cy.get('.input').eq(1).type('30');
    cy.get('.input').eq(2).type('20');
    cy.get('.input').eq(3).type('10');
    cy.get('.input').eq(6).type('30149');
    cy.get('.button').contains('Wyceń przesyłkę').click();

    cy.get(':nth-child(2) > .mb-0 > .order-2 > .flex-col > .text-xl').then(($el) => {
      var inPost: string = $el.text();
      inPostPrice = regex.exec(inPost);
    });

    cy.get('.button').eq(2).contains('Wybierz').click();

    cy.get(':nth-child(2) > .absolute > :nth-child(2) > .mr-1\\.5').then(($el) => {
      var inPost: string = $el.text();
      tablePrice = regex.exec(inPost);
      expect(inPostPrice[0]).to.be.equal(tablePrice[0]);
    });

    cy.get('.input').eq(0).type('Imię i nazwisko');
    cy.get('.input').eq(1).type('Nazwa firmy');
    cy.get('.input').eq(2).type('Ulica 1');
    cy.get('.input').eq(3).clear().type('43300');
    cy.get('.input').eq(4).type('Miejscowość');
    cy.get('.input').eq(5).type('email@test.pl');
    cy.get('.input').eq(6).type('123456789');
    cy.get('.input').eq(7).type('Imię i nazwisko');
    cy.get('.input').eq(8).type('Nazwa firmy');
    cy.get('.input').eq(9).type('Ulica 2');
    cy.get('.input').eq(10).clear().type('30149');
    cy.get('.input').eq(11).type('Miejscowość');
    cy.get('.input').eq(12).type('email@test.pl');
    cy.get('.input').eq(13).type('123456789');

    cy.contains('Kurier przyjedzie po przesyłkę').click();

    cy.contains('Kurier dostarczy przesyłkę').click();

    cy.get('.input').eq(14).type('książka');
    
    cy.contains('Przejdź dalej').click();

    cy.get('.error-p.mb-6').should('have.length', 2);
    cy.get('.error-p.mb-6').contains('Pole sposób pakowania przesyłki jest wymagane');
  });
});
