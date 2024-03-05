import { IFramePage } from "../../pages/Iframe";

describe("IFRAME WITH PLUGIN", () => {
  beforeEach("", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  beforeEach("", () => {
    cy.visit(`${Cypress.env("herokuapp")}/iframe`);
  });
  it("test iFrame", () => {
    cy.frameLoaded('#mce_0_ifr')
    cy.iframe('#mce_0_ifr')
  });
});
