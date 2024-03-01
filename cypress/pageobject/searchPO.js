class search 
{   
    element = 
    {
    addpurchaseOrder:() => cy.get('a[href="/app/purchase-order/create"]'),
    purchaseOrder:() => cy.get('a[href="/app/purchase-order"]'),
    searchUrl :() => cy.url(),
    title:() => cy.title(),
    po_id:() => cy.get('input[placeholder="Enter PO ID"]'),
    search_po :() => cy.get('button[type="submit"]'),
    PO_txt:() => cy.get('a[href="/app/purchase-order/view/47630"]>span.MuiButton-label'),
    addprlbl:() => cy.get("h2.MuiTypography-root"),
    po_models:() => cy.get('[id="purchase_order_model"]'),
    fixed_model:() => cy.get('#purchase_order_model-option-0'),
    capitive_model:() => cy.get('#purchase_order_model-option-1'),
    model_result :() => cy.get('.MuiTypography-body1'),
    clear_button :() => cy.get('span>button[tabindex="0"][type="button"]'), //eq(2)
    more_button :() => cy.get('span>button[tabindex="0"][type="button"]'), //eq(1)
    select_product :() => cy.get('#products'),
    fruit_item_lable :() => cy.get('p.MuiTypography-root'), //eq(5)
    start_date :() => cy.get('[placeholder="Start Date"]'),
    end_date :() => cy.get('[placeholder="End Date"]'),
    hide_button :() => cy.get('[type="button"][tabindex = "0"]') //eq(4)
    }

    selectFn()
    {
        cy.get('body').type('{downarrow}');
        cy.get('body').type('{enter}');
    }
    click_more()
    {
        return this.element.more_button().eq(1).click();
    }

    click_Clear()
    {
        return this.element.clear_button().eq(2).click();
    }
    menuModel(model)
    {   
        if(model === "Fixed"){
            return this.element.fixed_model().click();
        }
        else if(model === "Capitive"){
            return this.element.capitive_model().click();
        }
        else{
            return
        }
    }
    enterPO_ID(po_id)
    {
        return this.element.po_id().clear().type(po_id);
    }
    clickSearch()
    {
        return this.element.search_po().click()
    }

    click_PO()
    {
      return this.element.purchaseOrder().click()  
    }

    get_title()
    {
        return this.element.title();
    }

    get_url()
    {
        return this.element.searchUrl();
    }

    addprshFnclick()
    {
        return this.element.addpurchaseOrder().click()
    }
}
export default search;
