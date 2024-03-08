import { IFramePage } from "../../pages/Iframe";

describe("IFRAME WITH PLUGIN", () => {
  beforeEach("", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  beforeEach("", () => {
    cy.visit(`${Cypress.env("herokuapp")}/iframe`);
  });
  it("test iFrame", () => {
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").then((iframe) => {
      cy.wrap(iframe).type("{selectAll}{del}").type("Hello world!");
      cy.wrap(iframe).should("have.text", "Hello world!");            //! Assertions cypress JQuery
      cy.wrap(iframe).clear().type("Cypress");
      cy.then(() => {
      expect(iframe).to.have.text("Cypress");                         //! Assertions chai
      });
    });
  });
});
