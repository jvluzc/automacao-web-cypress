class MenuPage {
    selectorList() {
        let selectorsMenu = {
              searchField:'.oxd-main-menu-search',
              adminButton:'[href="/web/index.php/admin/viewAdminModule"]',
              pimButton:'[href="/web/index.php/pim/viewPimModule"]',
              leaveButton:'[href="/web/index.php/leave/viewLeaveModule"]',
              timeButton:'[href="/web/index.php/time/viewTimeModule"]',
              recruitmentButton:'[href="/web/index.php/recruitment/viewRecruitmentModule"]',
              myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
              performanceButton:'[href="/web/index.php/performance/viewPerformanceModule"]',
              dashboardButton:'[href="/web/index.php/dashboard/index"]',
              directoryButton:'[href="/web/index.php/directory/viewDirectory"]',
              maintenanceButton:'[href="/web/index.php/maintenance/viewMaintenanceModule"]',
              claimButton:'[href="/web/index.php/claim/viewClaimModule"]',
              buzzButton:'[href="/web/index.php/buzz/viewBuzz"]'
        }

        return selectorsMenu
    }

    searchFieldMenu(search){
        cy.get(this.selectorList().searchField).type(search)
    }

    clickAdminButton() {
        cy.get(this.selectorList().adminButton).click()
    }

    clickPimButtonn() {
        cy.get(this.selectorList().pimButton).click()
    }

    clickLeaveButton() {
        cy.get(this.selectorList().leaveButton).click()
    }

    clickTimeButton() {
        cy.get(this.selectorList().timeButton).click()
    }

    clickRecruitmentButton() {
        cy.get(this.selectorList().recruitmentButton).click()
    }

    clickMyInfoButton() {
        cy.get(this.selectorList().myInfoButton).click()
    }
    
    clickPerformanceButton() {
        cy.get(this.selectorList().performanceButton).click()
    }

    clickDashboardButton() {
        cy.get(this.selectorList().dashboardButton).click()
    }

    clickDirectoryButton() {
        cy.get(this.selectorList().directoryButton).click()
    }

    clickMaintenanceButton() {
        cy.get(this.selectorList().maintenanceButton).click()
    }

    clickClaimButton() {
        cy.get(this.selectorList().claimButton).click()
    }

    clickBuzzButton() {
        cy.get(this.selectorList().buzzButton).click()
    }
}

export default MenuPage