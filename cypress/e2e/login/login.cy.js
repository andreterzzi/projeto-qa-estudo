describe('Login - Cypress Example', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('Deve preencher campos e submeter formulário com sucesso', () => {

    cy.get('.action-email')
      .type('qa.teste@email.com')
      .should('have.value', 'qa.teste@email.com')

    cy.get('.action-disabled')
      .should('be.disabled')

    cy.get('.action-btn')
      .click()

  })

})