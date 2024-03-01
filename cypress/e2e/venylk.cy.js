describe('login_title_check',function()
{
    it('title_check', function(){
        cy.visit("/login",{failOnStatusCode: false})
        cy.title().should('eq','SupplyChain')
    })
    it('title_check_negative', function(){
        cy.visit("/login",{failOnStatusCode: false})
        cy.title().should('not.equal','Supplychain')
    })
   
})

describe('login_title_check',function()
{
    it('credential_check_positive', function(){
        cy.visit("/login",{failOnStatusCode: false})
        cy.get("[placeholder='Username']").type("dipanshu.mishra@vegrow.in") //put a value "9006110825" to username textbox
        cy.get("[placeholder='Password']").type("vegrow123") //put the same value to password textbox 
        cy.get("button[type='submit']").click()
        cy.get('.MuiTypography-root').should('include.text', 'Home')
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/home")
        .and('not.equal','https://sc-integration.vegrow.in/login')
    })

    it('credential_check_negative', function(){
        cy.visit("/login",{failOnStatusCode: false})
        cy.get("[placeholder='Username']").type("9006110825") //put a value "9006110825" to username textbox
        cy.get("[placeholder='Password']").type("9006") //putting the wrong detail to password textbox 
        cy.get("button[type='submit']").click()
        cy.url().should('eq',"https://sc-integration.vegrow.in/login")
    })
})

describe('purchase_order',function(){
    it('purchase_order_page_redirect', function(){
        cy.visit("/login",{failOnStatusCode: false})
        cy.get("[placeholder='Username']").type("9006110825") //put a value "9006110825" to username textbox
        cy.get("[placeholder='Password']").type("") //put the same value to password textbox 
        cy.get("button[type='submit']").click()
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/home")
        cy.get(':nth-child(1) > .MuiPaper-root > .jss31 > :nth-child(1) > .MuiTypography-colorPrimary > .MuiTypography-root > .jss43 > b').click();
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/list"); 
    });
})

describe('add_purchase_order_functionality', function(){
    beforeEach(() => {
        cy.visit("/login",{failOnStatusCode: false})
        cy.get("[placeholder='Username']").type("dipanshu.mishra@vegrow.in") //put a value "9006110825" to username textbox
        cy.get("[placeholder='Password']").type("vegrow123") //put the same value to password textbox 
        cy.get("button[type='submit']").click()
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/home")
        cy.get(':nth-child(1) > .MuiPaper-root > .jss31 > :nth-child(1) > .MuiTypography-colorPrimary > .MuiTypography-root > .jss43 > b').click(); 
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/list"); 
      });
    it('shows_appropiate_message_wrong_po_id', function(){
        cy.get("[placeholder='Enter PO ID']").type('47320')
        cy.get(".MuiButtonBase-root[type='submit']").click()
        cy.get('h2.MuiTypography-root.disabled-text.MuiTypography-h4.MuiTypography-colorTextPrimary').should('contain', 'No Data Available');

    })
    it('clear_button', function(){
        cy.get("[placeholder='Enter PO ID']").type('47320')
        cy.get('span.styled__Wrapper-sc-2qg4uc-0.iNOOTt > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSizeSmall.MuiButton-sizeSmall[type="button"]').click();
        cy.get("[placeholder='Enter PO ID']").should('have.value', '');
    })
    it('add_purchase_order',function(){
        cy.get("a.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-containedSizeSmall.MuiButton-sizeSmall[href='/app/purchase-order/create']").click();
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/create")
    })
    it('check_entry_po-Id',function(){
        const my_po_id = "47032"
        cy.get("[placeholder='Enter PO ID']").type(my_po_id)
        cy.get(".MuiButtonBase-root[type='submit']").click()
        cy.get(`a.MuiButtonBase-root[href="/app/purchase-order/view/${my_po_id}"]`).should('be.visible').click();
        cy.url().should('eq', `https://sc-integration.vegrow.in/app/purchase-order/list?id=${my_po_id}`);        
    })
    it('check_edit_purchase-order', function(){
        const my_po_id = "47032"
        cy.get("[placeholder='Enter PO ID']").type(my_po_id)
        cy.get(".MuiButtonBase-root[type='submit']").click()
        cy.get(':nth-child(9) > .styled__Wrapper-sc-2qg4uc-0 > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root').click();
        cy.url().should('eq', `https://sc-integration.vegrow.in/app/purchase-order/edit/${my_po_id}`);        
        cy.get('.styled__TitleWrapper-sc-3x2xd4-2 > .MuiTypography-root > b').should('contain','Edit Purchase Order')
    })
})
