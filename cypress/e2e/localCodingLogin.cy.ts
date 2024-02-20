import { LCLogin } from "../localCoding/LocalCoding"
describe('LOGIN', () => {
    it('loginPage', ()=>{
        cy.visit((`${Cypress.env('stage')}`))
        LCLogin.submitButtonLogin(Cypress.env('email'), Cypress.env('password'))
    })
})
