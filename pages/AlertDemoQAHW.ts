class AlertDemoQA {
  private alertButton: string = "#alertButton";
  private alertTextButton: string = "Click me";
  private jsAlerText: string = "You clicked a button";

  jsAlert() {
    //cy.contains(this.buttonSelecttor, this.alertTextButton).click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal(this.jsAlerText);
    });
    cy.on("window:confirm", () => true);
    cy.get(this.alertButton).click();
  }
}

export const AlertsPage = new AlertDemoQA();
