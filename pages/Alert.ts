import { should } from "chai";

class Alert {
  private alertTextButton: string = "Click for JS Alert";
  private buttonSelecttor: string = "button";
  private buttonPromptText: string = "Click for JS Prompt";
  // * pupupWindowText
  private jsAlertText: string = "I am a JS Alert";
  private jsConfirmWindowText: string = "I am a JS Confirm ";

  private resultSelector: string = "#result";
  private resultTextJSAlert: string = "You successfully clicked an alert";
  private resultTextJSConfirm: string = "You clicked: Ok";

  private jsConfirmText: string = "Click for JS Confirm";
  private jsPromptText: string = "Click for JS Prompt";

  jsAlert() {
    cy.contains(this.buttonSelecttor, this.alertTextButton).click();
    cy.on("window:alert", (textAlert) => {
      //! JS
      expect(textAlert).to.equal(this.jsAlertText);
    });
    cy.on("window:confirm", () => true);
    cy.get(this.resultSelector).should("have.text", this.resultTextJSAlert);
  }
  jsConfirm() {
    cy.contains(this.buttonSelecttor, this.jsConfirmText).click();
    cy.on("window:alert", (textAlert) => {
      //! JS
      expect(textAlert).to.equal(this.jsConfirmWindowText);
    });
    cy.on("window:confirm", () => true);
    cy.get(this.resultSelector).should("have.text", this.resultTextJSConfirm);
  }
  jsPrompt() {
    const text = "Hello world!";
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns(text); // i'm waiting for
      cy.contains(this.buttonSelecttor, this.jsPromptText).click();
    });
    cy.window().its("prompt").should("be.called"); //* проверка вызова stub
    cy.window().its("prompt").should("be.calledOnce");
    cy.get(this.resultSelector).should("include.text", text);
  }
}

export const AlertPage = new Alert();
