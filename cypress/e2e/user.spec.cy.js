import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfo.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('testes-site-HRM-orange', () => {

  it.only('usuário-alterar-informacoes-sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userSucess.userName, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.clickMyInfoButton()
    myInfoPage.fillPersonalDetails('Pauldinei','Jose','Silva')
    myInfoPage.fillEmployeeId('EmployID', 'OtherID', 'DriverLicenceTest', '2025-07-22')
    myInfoPage.fillStatus('1995-12-15')
    myInfoPage.clickSave1()
  })
})