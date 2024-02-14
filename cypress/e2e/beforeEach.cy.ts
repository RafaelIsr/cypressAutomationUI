describe('first', ()=>{
    beforeEach(()=>{            // Перед запуском теста выполнять команду cy.visit('/home')
        cy.visit('/home')
        cy.log('beforeEach')
    })
    afterEach(()=>{
        cy.log('Hello world')
    })
    it('testCase 1', ()=>{
        cy.log('Hello world')
    })
    it('testCase 2', ()=>{
        cy.log('Hello world')
    })
    it('testCase 3', ()=>{
        cy.log('Hello world')
    })
})