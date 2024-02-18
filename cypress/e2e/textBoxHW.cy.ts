import {textBoxPage} from '../../pages/TextBox'

describe('TextBox', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env('demoQA')}/text-box`)
    })
    it.only('textBox', ()=>{
        cy.get('#userName').type('Hello');
        cy.get('#userEmail').type('World@gmail.com');
        cy.get('#currentAddress').type('NY');
        cy.get('#permanentAddress').type('SiU');
        cy.get('#submit').click();

    })
    it('textBox with PageObject', ()=>{
        textBoxPage.submitButtonTextBox()
        cy.contains('Submit')
        cy.get('#name').should('have.text', 'Name:Sveta');
        cy.get('#email').should('have.text', 'Email:sveta@gmail.com');
        cy.get('#currentAddress.mb-1').should('include.text', 'Current Address:LYN');
        cy.get('#permanentAddress.mb-1').should('contaiinclude.text', 'Permananet Address:SUR');
    })
})