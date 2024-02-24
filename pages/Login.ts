class Login {
  userName: string = "#userName";
  password: string = "#password";
  loginButton: string = "#login";
  logOutButton: string = "#submit";

  submitButtonLogin() {
    cy.get(this.userName).type(process.env.COOKIESEMAIL); //! Пароль в env
    cy.get(this.password).type(process.env.COOKIESPASS);
    cy.get(this.loginButton).click();
    cy.contains("Log out");
  }
}

export const LoginPage = new Login();
