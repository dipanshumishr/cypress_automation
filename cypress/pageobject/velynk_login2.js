class login 
{
    txtUsername = "[placeholder='Username']";
    txtPassword = "[placeholder='Password']";
    btnSubmut = "button[type='submit']";
    lbl = '.MuiTypography-root' ;

    setUsername(username)  //setting the username textbox
    {
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password) //setting the password textbox
    {
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit()
    {
        cy.get(this.btnSubmut).click();
    }

    verifyLogin()
    {
        cy.get(this.lbl).should('include.text', 'Home')
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/home")
        .and('not.equal','https://sc-integration.vegrow.in/login')
    }
}
export default login;
