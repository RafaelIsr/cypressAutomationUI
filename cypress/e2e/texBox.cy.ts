describe("test testBox", () => {
  it("test", () => {
    cy.visit("https://uitestingplayground.com/textinput");
    cy.get("input.form-control").type("Hello");
    cy.get("#updatingButton").click();
    cy.contains("button", "Hello");
    cy.get("#updatingButton").should("have.text", "Hello");
    cy.get("#updatingButton").then((element) => {
      expect(element.text()).to.equal("Hello");
    });
  });
});
