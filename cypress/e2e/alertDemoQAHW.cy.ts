import { AlertsPage } from "../../pages/AlertDemoQAHW"

describe("ALERT", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env('demoQA')}/alerts`)
    })
    it('Click Button to see alert', ()=>{
        AlertsPage.jsAlert()
    })
})