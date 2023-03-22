/// <reference types="cypress" />

describe('E2E tests - courier order test', () => {
  it('Courier order form test', () => {
    const regex = new RegExp(/\d+,\d+/);
    var inPostPrice: string[];
    var tablePrice: string[];

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

    var inputs: string[] = ['Imię i nazwisko', 'Nazwa firmy', 'Ulica 1', '43300', 'Miejscowość', 'email@test.pl', '123456789',
      'Imię i nazwisko', 'Nazwa firmy', 'Ulica 1', '', 'Miejscowość', 'email@test.pl', '123456789']
    for (let i = 0; i < 13; i++) {
      if (i != 10) {
        cy.get('.input').eq(i).type(inputs[i]);
      }
    }

    cy.contains('Kurier przyjedzie po przesyłkę').click();

    cy.contains('Kurier dostarczy przesyłkę').click();

    cy.get('.input').eq(14).type('książka');

    cy.contains('Przejdź dalej').click();

    cy.get('.error-p.mb-6').should('have.length', 2);
    cy.get('.error-p.mb-6').contains('Pole sposób pakowania przesyłki jest wymagane');
  });
});
