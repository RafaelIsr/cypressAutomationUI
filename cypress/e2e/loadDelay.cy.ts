describe('LOAD DELAY', () => {
    it('load delay emulate failing', () => {
       cy.visit(Cypress.env('base'), {timeout: 0}) 
    });
    it('load delay emulate', () => {
        cy.visit(Cypress.env('base'), {timeout: 2_000}) 
        cy.get('[href="/loaddelay"]').click()
        cy.contains('button', 'Button Appearing After Delay')
     });
});