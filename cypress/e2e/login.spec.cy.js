import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('testes-site-HRM-orange', () => {

  it.only('login-sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userSucess.userName, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
  })

  it.skip('login-alerta-falha-usuario-senha', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userFail.userName, userData.userFail.password )
    loginPage.checkInvalidCredentials()
  })

})