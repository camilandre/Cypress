///<reference types="Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Commands').click();
    cy.contains('Traversal').click();
    cy.get('.banner > .container').should('contain', 'Traversal');
  })
})