describe("Login Page", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("login", () => {
    cy.login("test", "test1234*");
    cy.contains("Log out");
  });
});
