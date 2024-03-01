class login_elements
{
    elements = 
    {
    usernameTxt:() => cy.get("[placeholder='Username']"),
    passwordTxt:() => cy.get("[placeholder='Password']"),
    submitt:() => cy.get("button[type='submit']"),
    loginUrl:() => cy.url(),
    title:() => cy.title(),
    iconClass:() => cy.get("svg.MuiSvgIcon-root"),
    username_menu:() => cy.get('ul.MuiList-root[role="menu"]>li[tabindex="0"]'), //username eq(1) 
    logout_menu:() => cy.get('#simple-menu > .MuiPaper-root > .MuiList-root > [tabindex="-1"]') //logout eq(67)

    }



    get_username()
    {
        return this.elements.username_menu().eq(1);
    }

    clickprofile()
    {
        return this.elements.iconClass().eq(2).click();
    }

    get_logout()
    {
       return this.elements.logout_menu(); 
    }

    click_logout()
    {
        return this.elements.logout_menu().click();
    }

    get_title()
    {
        return this.elements.title();
    }

    get_url()
    {
        return this.elements.loginUrl();
    }
    enterUsername(username)
    {
        return this.elements.usernameTxt().clear().type(username);
    }

    enterPassword(password)
    {
        return this.elements.passwordTxt().clear().type(password);
    }

    clickSubmit() {
        return this.elements.submitt().click();
    }

    login(username,password)
    {
        return this.enterUsername(username)
                .enterPassword(password)
                .elements.submit().click()
    }
}
export default login_elements;
