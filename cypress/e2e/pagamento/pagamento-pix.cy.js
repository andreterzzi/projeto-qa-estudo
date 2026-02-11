describe('Menu Commands - Cypress Example', () => {

  it('Deve exibir opções do menu Commands ao clicar', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Commands').click()

    cy.contains('Querying').should('be.visible')

  })

})