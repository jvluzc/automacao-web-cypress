class MyInfoPage {
    selectorList() {
        let selectorsMyInfo = {
              firstNameField:'[name="firstName"]',
              middleNameField:'[name="middleName"]',
              lastNameField:'[name="lastName"]',
              employeeIdField:'.oxd-input--active',
              otherIdField:'.oxd-input--active',
              drivrLicenceNumberField:'.oxd-input--active',
              licenceExpiryDate:'.oxd-input--active',
              calendarioCloseButton:'.--close',
              nationalitySComboBox:'.oxd-select-text--arrow',
              itemNacionalityComboBox:'.oxd-select-dropdown > :nth-child(27)',
              maritalStatusComboBox:'.oxd-select-text--arrow',
              itemMaritalComboBox:'.oxd-select-dropdown > :nth-child(3)',
              ssnNunberField:'.oxd-input--active',
              sinNumberField:'.oxd-input--active',
              dateOfBirth:'.oxd-input--active',
              selectgenero:'.oxd-radio-input',
              saveButton: '[type="submit"]',
              successfullySaved:'.oxd-toast-close'
        }

        return selectorsMyInfo
    }

    fillPersonalDetails(FirstName, MiddleName, LastName) {
        cy.get(this.selectorList().firstNameField).clear().type(FirstName)
        cy.get(this.selectorList().middleNameField).clear().type(MiddleName)
        cy.get(this.selectorList().lastNameField).clear().type(LastName)
    }

    fillEmployeeId(EmployeId, OtherId, DrivrLicenceNumber, DateExpiryLicence) {
        cy.get(this.selectorList().employeeIdField).eq(3).clear().type(EmployeId)
        cy.get(this.selectorList().otherIdField).eq(4).clear().type(OtherId)
        cy.get(this.selectorList().drivrLicenceNumberField).eq(5).clear().type(DrivrLicenceNumber)
        cy.get(this.selectorList().licenceExpiryDate).eq(7).clear().type(DateExpiryLicence)
        cy.get(this.selectorList().calendarioCloseButton).click()
    }

    fillStatus(DateOfBirth) {
        cy.get(this.selectorList().nationalitySComboBox).eq(0).click({force:true})
        cy.get(this.selectorList().itemNacionalityComboBox).click()
        cy.get(this.selectorList().maritalStatusComboBox).eq(1).click({force:true})
        cy.get(this.selectorList().itemMaritalComboBox).click()
        cy.get(this.selectorList().dateOfBirth).eq(8).clear().type(DateOfBirth)
        cy.get(this.selectorList().selectgenero).eq(1).click()
    }

    clickSave1() {
        cy.get(this.selectorList().saveButton).eq(1).click({force:true})
        cy.get(this.selectorList().successfullySaved)
    }
}

export default MyInfoPage