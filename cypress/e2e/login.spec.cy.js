import userData from '../fixtures/userData.json'

describe('testes-site-HRM-orange', () => {

  let selectorList = {
    usernameField: "[name='username']",
    passawordField: "[name='password']",
    loginButton: '.oxd-button',
    dashboardGridValidation: ".orangehrm-dashboard-grid",
    messageInvalidCredentials: '.oxd-alert',
  }

  it('login-sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.userName)
    cy.get(selectorList.passawordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location ('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGridValidation)
  })
  it('login-alerta-falha-usuario-senha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.userName)
    cy.get(selectorList.passawordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.messageInvalidCredentials)
  })
})