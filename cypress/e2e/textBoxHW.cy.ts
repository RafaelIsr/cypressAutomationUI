import {textBoxPage} from '../../pages/TextBox'

describe('TextBox', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env('demoQA')}/text-box`)
    })
    it('textBox', ()=>{
        cy.get('#userName').type('Hello');
        cy.get('#userEmail').type('World@gmail.com');
        cy.get('#currentAddress').type('N-Y');
        cy.get('#permanentAddress').type('S---U');
        cy.get('#submit').click();

    })
    it.only('textBox with PageObject', ()=>{
        textBoxPage.submitButtonTextBox()
        cy.contains('Submit')

    })
})