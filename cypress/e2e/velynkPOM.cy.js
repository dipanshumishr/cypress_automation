import login from "../pageobject/velynk_login"; 


describe('login_credential_check',function(){
    
    it("login-test", function()
    {
    
        cy.visit("/login",{failOnStatusCode: false});

        const ln =new login();
        ln.setUsername("9006110825");
        ln.setPassword("9006110825");
        ln.clickSubmit();
        ln.verifyLogin();
    
    })
})