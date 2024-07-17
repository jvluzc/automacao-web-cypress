describe('testes-site-HRM-orange', () => {
  it.skip('login-sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button').click()
    cy.location ('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains ('Dashboard')
  })
  it('login-alerta-falha-usuario-senha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('usuario_falha_teste')
    cy.get("[name='password']").type('senha_falha_teste')
    cy.get("[type='submit']").click()
    cy.get('.oxd-alert')
  })
})