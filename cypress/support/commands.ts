/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-iframe';
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      readingXlsx(file: any): any;
      apiLogin(email: string, password: string): Chainable<void>;

      //       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>                            //* осталось
      //       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}
Cypress.Commands.add("login", (userName: string, password: string) => {
  cy.get("#userName").type(userName);
  cy.get("#password").type(password);
  cy.contains("button", "Login").click();
})

Cypress.Commands.add('readingXlsx', (file) => {
  return cy.task("parseXlsx", { filePach: file });
});
Cypress.Commands.add('apiLogin', (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: 'https://server-stage.pasv.us/user/login',
    body: {
      email: email,
      password: password
    }
  }).then((response)=>{
    console.log(response)
  })
});
