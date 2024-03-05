import { IFramePage } from "../../pages/Iframe";
import { IFrameAppPage } from "../../pages/IframeApp";

describe("IFRAME", () => {
  beforeEach("", () => {
    IFramePage.visit();
  });
  beforeEach("", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("test iframe", () => {
    IFramePage.getIframe();
  });
});

describe.only("IFRAMEAPP", () => {
  beforeEach("", () => {
    IFrameAppPage.visit();
  });
  beforeEach("", () => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("test iframe with extension", () => {
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").then((iframeApp) => {
      cy.wrap(iframeApp).type("{selectAll}{del}Cypress");
      cy.wrap(iframeApp).should("have.text", "Cypress");
      cy.wrap(iframeApp).clear().type("Hello Cypress"); //* то же что и на 26 строке
    });
  });
});