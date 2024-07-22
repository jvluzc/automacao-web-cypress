import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('testes-site-HRM-orange', () => {

  let selectorList = {
    firstNameField:'[name="firstName"]',
    MiddleNameField:'[name="middleName"]',
    lastNameField:'[name="lastName"]',
    nickNameField:'.oxd-input--active',
    employeeIdField:'.oxd-input--active',
    otherIdField:'.oxd-input--active',
    drivrLicenceNumberField:'.oxd-input--active',
    licenceExpiryData:'.oxd-input--active',
    nationalitySComboBox:'.oxd-select-text--arrow',
    itemNacionalityComboBox:'.oxd-select-dropdown > :nth-child(27)',
    maritalStatusComboBox:'.oxd-select-text--arrow',
    itemMaritalComboBox:'.oxd-select-dropdown > :nth-child(3)',
    calendarioCloseButton:'.--close',
    ssnNunberField:'.oxd-input--active',
    sinNumberField:'.oxd-input--active',
    dateOfBirth:'.oxd-input--active',
    selectgenero:'.oxd-radio-input',
    saveButton: '[type="submit"]',
    successfullySaved:'.oxd-toast-close'
  }

  it.only('usuário-informacoes-alteração-sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginUser(userData.userSucess.userName, userData.userSucess.password )
    dashboardPage.checkDashboardPage()
    menuPage.clickMyInfoButton()  

    cy.get(selectorList.firstNameField).clear().type('Pauldinei')
    cy.get(selectorList.MiddleNameField).clear().type('Donatto')
    cy.get(selectorList.lastNameField).clear().type('Silva')
    //cy.get(selectorList.nickNameField).eq(4).type('JVLUZC-NickName')
    cy.get(selectorList.employeeIdField).eq(3).clear().type('Employe Id')
    cy.get(selectorList.otherIdField).eq(4).clear().type('Other Id')
    cy.get(selectorList.drivrLicenceNumberField).eq(5).clear().type('Drivr Licence Number')
    cy.get(selectorList.licenceExpiryData).eq(7).clear().type('2025-07-22')
    cy.get(selectorList.calendarioCloseButton).click()
    cy.get(selectorList.nationalitySComboBox).eq(0).click({force:true})
    cy.get(selectorList.itemNacionalityComboBox).click()
    cy.get(selectorList.maritalStatusComboBox).eq(1).click({force:true})
    cy.get(selectorList.itemMaritalComboBox).click()
    //cy.get(selectorList.ssnNunberField).eq(9).type('SSN Nunber')
    //cy.get(selectorList.sinNumberField).eq(10).type('SIN Nunber')
    cy.get(selectorList.dateOfBirth).eq(8).clear().type('1995-07-22')
    cy.get(selectorList.selectgenero).eq(1).click()
    cy.get(selectorList.saveButton).eq(1).click({force:true})
    cy.get(selectorList.successfullySaved)
  })

  it.skip('login-alerta-falha-usuario-senha', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.userName)
    cy.get(selectorList.passawordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.messageInvalidCredentials)
  })
})