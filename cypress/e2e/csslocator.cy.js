describe("css-locators", function(){

    it("csslocate", function(){
        cy.visit('/login',{failOnStatusCode: false})

       cy.get("input[name='username']").type("9006110825")

       cy.get("input[name='password']").type("9006110825")

       cy.get("button[type='submit']").click()

       cy.url().should('eq',"https://sc-integration.vegrow.in/app/home")
        
    })
})