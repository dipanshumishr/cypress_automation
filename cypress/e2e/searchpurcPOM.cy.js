import search from "../pageobject/searchPO";
const searches = new search();

describe('Search Purchase order', () => {
    beforeEach(() => {
        cy.customBeforeEach(); 
    });

    it('basicUrl', () => {
        searches.get_url().should('eq','https://sc-integration.vegrow.in/app/purchase-order/list') 
        searches.get_title().should('eq','SupplyChain') 
    })
    it('searchPo', () => {
        cy.fixture('searchfix.json').then(valid => {
            cy.wrap(valid).as('valid');
        searches.enterPO_ID(valid.validDetails.po_id).then(input => {
            expect(input).to.have.value(valid.validDetails.po_id);
        searches.clickSearch();
        cy.wait(2000);
        searches.element.PO_txt().invoke('text').should('contain', valid.validDetails.po_id);
        })
        })
    });
    it('addPurchaseOrder', () => {
        searches.addprshFnclick();
        searches.get_url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/create");
        searches.element.addprlbl().should('have.text','Add Purchase Order');
    })
    it('PO model',() => {
        cy.fixture('searchfix.json').then(valid =>{
            cy.wrap(valid).as('valid')
        searches.element.po_models().click();
        searches.menuModel(valid.validDetails.po_model2);
        searches.element.po_models().should('have.value',valid.validDetails.po_model2);
        searches.clickSearch();
        cy.wait(5000);
        const expectedText = `Model: ${valid.validDetails.po_model2}`;
        searches.element.model_result().contains(expectedText);

        })
    })

    it('clearfunction',() => {
        cy.fixture('searchfix.json').then(valid => {
            cy.wrap(valid).as('valid')
        searches.enterPO_ID(valid.validDetails.po_id).then(input => {
            expect(input).to.have.value(valid.validDetails.po_id); 
            searches.click_Clear();
            searches.element.po_id().should('have.value',"");
        })
        })
    })

    it('more button',() => {
        searches.click_more();
        searches.element.select_product().should('be.visible');
    })

    it('select product', () => {
        cy.fixture('searchfix.json').then(valid => {
            cy.wrap(valid).as('valid')
        
        searches.click_more();
        searches.element.select_product().type(valid.validDetails.fruit1).then(input => {
            expect(input).to.have.value(valid.validDetails.fruit1)
        cy.wait(5000);
        searches.selectFn();
        searches.clickSearch();
        cy.wait(4000)
        searches.element.fruit_item_lable().eq(5).should('contain',valid.validDetails.fruit1);
        })     
    })
    })

    it('start and end date', () => {
        cy.fixture('searchfix.json').then(valid => {
            cy.wrap(valid).as('valid')
        const date = valid.validDetails.Start_date;
        const edate = valid.validDetails.end_date;
        searches.element.start_date().type(date)
        .should('have.value', date);
        searches.element.end_date().type(edate)
        .should('have.value', edate);
        searches.click_Clear();
        })
    })
    it.only('hide_button',() => {
        searches.click_more();
        searches.element.select_product().should('be.visible');
        searches.element.hide_button().eq(4).click();
        searches.element.select_product().should('not.exist');
    })

})

  