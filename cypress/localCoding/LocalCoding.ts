class LocalCodingLogin {
    email: string = 'normal_login_email';
    password: string = 'normal_login_password';
    loginButton: string = 'button[type="submit"]';

    submitButtonLogin(email, password) :void{
        cy.get(this.email).type(email);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }
}

export const LCLogin = new LocalCodingLogin()