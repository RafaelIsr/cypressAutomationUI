class TextBox {
    userName: string = "#userName";
    userEmail: string = "#userEmail";
    currentAddress: string = "#currentAddress";
    permanentAddress: string = "#permanentAddress";
    submit: string = "#submit";

    submitButtonTextBox(){
        cy.get(this.userName).type("PageObject");
        cy.get(this.userEmail).type("PageObject");
        cy.get(this.currentAddress).type("PageObject");
        cy.get(this.permanentAddress).type("PageObject");
        cy.get(this.submit).click();

    }
}

export const textBoxPage = new TextBox()