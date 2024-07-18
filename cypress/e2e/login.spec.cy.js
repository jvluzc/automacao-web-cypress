describe('testes-site-HRM-orange', () => {

  let selectorList = {
    usernameField: "[name='username']",
    passawordField: "[name='password']",
    loginButton: '.oxd-button',
    titleTopBar: '.oxd-topbar-header-breadcrumb-module',
    messageInvalidCredentials: '.oxd-alert',
  }

  it.skip('login-sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passawordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location ('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.titleTopBar).contains ('Dashboard')
  })
  it('login-alerta-falha-usuario-senha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('usuario_falha_teste')
    cy.get(selectorList.passawordField).type('senha_falha_teste')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.messageInvalidCredentials)
  })
})