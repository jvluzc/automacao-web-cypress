class LoginPage {
    selectorList() {
        let selectorsLogin = {
              usernameField: "[name='username']",
              passawordField: "[name='password']",
              loginButton: '.oxd-button',
              messageInvalidCredentials: '.oxd-alert'
        }

        return selectorsLogin
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginUser(userName, password) {
        cy.get(this.selectorList().usernameField).type(userName)
        cy.get(this.selectorList().passawordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkInvalidCredentials() {
        cy.get(this.selectorList().messageInvalidCredentials)
    }

}

export default LoginPage