describe('Fluxo de Pagamento via PIX', () => {

  it('Deve simular geração de QR Code ao selecionar PIX', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('Forms').click()

    cy.get('input[type="checkbox"]').first().check()

    cy.get('button').contains('Submit').click()

    cy.url().should('include', 'commands/actions')

  })

})