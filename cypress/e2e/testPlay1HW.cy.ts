describe('Play1HW', () => {
    it('Wait for element to be visible', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#visibility_trigger').should('be.visible').and('exist').click()
        cy.get('#visibility_target').should('be.visible').and('exist').click()
        cy.contains('.popover-body', 'I just removed my invisibility cloak!!')
    });
    it('Wait for element to be Invisible', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#invisibility_target').should('be.visible').and('exist')
        cy.get('#invisibility_trigger').should('be.visible').and('exist').click()
        cy.contains('#spinner_gone', 'Thank God that spinner is gone!')

    })
    it('Wait for an attribute to contain certain text', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#enabled_trigger').should('be.visible').and('exist').click()
        cy.get('#enabled_target').should('be.visible').and('exist')
        cy.get('[class="btn btn-success"]').should('be.visible').and('exist')
        cy.get('#enabled_target').should('be.visible').and('exist').click()
        cy.contains('.popover-body', 'See, you just clicked me!!')
    })
    it('Wait for Page Title to change', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#page_title_trigger').should('be.visible').and('exist').click()
        cy.get('[class="spinner-border spinner-border-sm mr-2"]').should('be.visible')
    })
    it('Wait for text/value to have specific values', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#text_value_trigger').should('be.visible').and('exist').click()
        cy.get('[class="spinner-border spinner-border-sm mr-2"]').should('be.visible')
        cy.get('#wait_for_value').type('Creator of C')
        cy.get('#wait_for_text').should('be.visible').and('exist').click()
    })
    it.only('Wait for frame to be available and then switch to it', () => {
        cy.visit(Cypress.env('play1')),
        cy.get('#wait_for_frame').should('be.visible').and('exist').click()
        cy.get('[class="spinner-border spinner-border-sm mr-2"]').should('be.visible')
        cy.get('.navbar-brand').should('be.visible').and('exist')
        cy.get('#inner_button').should('be.visible').and('exist').click()
    })
})