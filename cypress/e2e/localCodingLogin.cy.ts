import { LCLogin } from "../localCoding/LocalCoding";
describe("LOGIN", () => {
  beforeEach(() => {
    cy.session("myCurrentSession", () => {
      cy.visit(`${Cypress.env("stage")}/user/login`);
      LCLogin.submitButtonLogin(Cypress.env("email"), Cypress.env("password"));
    });
  });
  it("loginPage", () => {
    cy.visit(`${Cypress.env("stage")}/user/course`);
  });
});
