class DashboardPage {
    selectorList() {
        let selectorsDashboard = {
            dashboardGridValidation: ".orangehrm-dashboard-grid",
        }

        return selectorsDashboard
    }

    checkDashboardPage() {
        cy.location ('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGridValidation).should('be.visible')
    }

}

export default DashboardPage