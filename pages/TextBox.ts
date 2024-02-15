class TextBox {
    userName: string = "#userName";
    userEmail: string = "#userEmail";
    currentAddress: string = "#currentAddress";
    permanentAddress: string = "#permanentAddress";
    submit: string = "#submit";

    submitButtonTextBox(){
        cy.get(this.userName).type("Sveta");
        cy.get(this.userEmail).type("sveta@gmail.com");
        cy.get(this.currentAddress).type("LYN");
        cy.get(this.permanentAddress).type("SUR");
        cy.get(this.submit).click();

    }
}

export const textBoxPage = new TextBox()