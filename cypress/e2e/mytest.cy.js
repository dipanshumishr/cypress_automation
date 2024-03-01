describe('My First Test', function() 
{
    it('verify_title_positive', function()
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq','OrangeHRM')
    })

    it('verify_title_Negative', function()
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq','dipanshu')
    })
  })