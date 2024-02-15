import {textBoxPage} from '../../pages/TextBox'

describe('TextBox', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env('demoQA')}/text-box`,{timeout:10000})
    })
    it('textBox', ()=>{
        cy.get('#userName').type('Hello');
        cy.get('#userEmail').type('World@gmail.com');
        cy.get('#currentAddress').type('NY');
        cy.get('#permanentAddress').type('SU');
        cy.get('submit').click();

    })
    it('textBox with PageObject', ()=>{
        textBoxPage.submitButtonTextBox()
        cy.get('Submit')

    })
})