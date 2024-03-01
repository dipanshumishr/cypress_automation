class login
{
    setUsername(username)  //setting the username textbox
    {
        cy.get("[placeholder='Username']").type(username);
    }

    setPassword(password) //setting the password textbox
    {
        cy.get("[placeholder='Password']").type(password);
    }
    clickSubmit()
    {
        cy.get("button[type='submit']").click();
    }

    verifyLogin()
    {
        cy.get('.MuiTypography-root').should('include.text', 'Home')
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/home")
        .and('not.equal','https://sc-integration.vegrow.in/login')
    }
}

export default login;