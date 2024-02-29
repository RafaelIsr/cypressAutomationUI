import { LoginPage } from "../../pages/Login";
// Cypress.session.clearAllSavedSessions()

describe("COOKIES", () => {
  beforeEach(() => {
    cy.session("myCurrentSession", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      // cy.get('#userName').type('test');            //! Все это теперь в LoginPage.submitButtonLogin();
      // cy.get('#password').type('Test1234*');
      // cy.contains('button', 'Login').click();
      // cy.contains('Log out');
      LoginPage.submitButtonLogin();
      cy.wait(2000);
    });
  });
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }); // ? Убрали кваказябры в cypress
  });
  it("create cookies with cy.session", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.url().then((url) => {
      cy.log(url);
    });
  });
  it("create cookies with cy.session", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
});
