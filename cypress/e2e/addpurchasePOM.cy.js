import addPurchase from "../pageobject/purchaseorder"; 
import search from "../pageobject/searchPO";
import login_elements from "../pageobject/login";

describe('add purchase order',function(){
    const ln = new addPurchase();
    const tn = new search();
    const lgg = new login_elements();


    beforeEach(() => {
        cy.visit("/login",{failOnStatusCode: false})
        cy.get("[placeholder='Username']").type("dipanshu.mishra@vegrow.in"); //put a value "9006110825" to username textbox
        cy.get("[placeholder='Password']").type("vegrow123");//put the same value to password textbox 
        cy.get("button[type='submit']").click();
        cy.wait(3000);
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/home");
        cy.get(tn.purchaseOrder).click()
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/list"); 
        cy.get(tn.addpurchaseOrder).click();
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/create");
      });
    
    it("page_verification", function(){

        ln.addPurchaseVerification();
        
    })

    it("back_arrow", function(){

        ln.backarrow();
        cy.get(tn.addpurchaseOrder).click();
        cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/create");
    })

    it("menu_button",function(){
        ln.menu_pop();
    })

    it("logout_button",function(){
    
        ln.logout_func();
        lgg.verify_login();
       /* cy.get(tn.usernameTxt).should('have.text', '');
        cy.get(tn.passwordTxt).should('have.text', '');
        cy.url().should('eq',"https://sc-integration.vegrow.in/login");
        */
    })

    it("po_type_farmgate", function(){
       
        ln.po_typeFarm();
    })

    it("po_type_vendor", function(){
        
        ln.po_typeVendor();
    })

    it("po_type_NULL", function(){     // not working
        

        ln.po_typeNone();
    })

    it("radio_unit",function(){     //flaky results
       

        ln.radiobutton_check();
    })
    
    
    it("radio_visibility", function()   //flaky results
    {
        

        ln.simultanousClickKg();
        ln.simultanousClickUnit();
    })
    it("buyers_null", function()
    {
        
        ln.buyers_null();
    })
    it("buyers_type", function()
    {
        
        ln.buyers_func();
    })

    it("buyers_clear", function()
    {
        
        ln.buyers_name_clear();
    })
    it("buyers_multi", function()
    {
        
        ln.buyers_name_multi();
    })

    it("buyers_multi_clear", function()
    {
        
        ln.buyers_clearAll();
    })

    it("supplier input", function()
    {
        
        ln.suppliers_input();
    })

    it("supplier input clear", function()
    {
        
        ln.supplier_clear();
    })

    it("address updation", function()
    {
        
        ln.address_update();
    })
   it("micropocket", function(){
        
        ln.micropocketf();
    })
    

   it("select date", function()
   {
    
   ln.select_datef();
    })

    it("cancel function", function()
    {
       ln.cancel_func();
    })
    it("incharge executive", function()
    {
       ln.incharge_execf();
    })

    it("incharge executive clear", function()
    {
   
       ln.incharge_execClear();
    })
    it("model none", function()
    {
      
       ln.model_None();
    })
    it("model fixed", function()
    {
      
       ln.model_fixed();
    })
    it("model capitive", function()
    {
       
       ln.model_capitive();
    })
    it("required tag",function()
    {
        ln.required_check();
    })
    it("name text",function(){
        ln.name_fruit("Pomegranate");
    })
    it("name SKU bug",function(){
        ln.name_wrong_sku("Pomegranate","Kinnow");
    })
    it("desc test",function(){
        ln.desc("test");
    })

    it("expected_weight", function(){
        ln.expected_weight_positive('100');
        ln.expected_weight_negative('abcd');
    })

    it("expected_weight", function(){
        ln.agreed_value_positive('100');
        ln.agreed_value_negative('abcd');
    })

    it("add_fruit", function()
    {
        ln.add_button_func();
    })
    it("upload_button", function(){
        ln.uploadimage();
    })
    it.skip('fixtureFarm', function()
    {
        cy.fixture('addPurcfix.json').then((order) => {
          ln.fillPODetails(order);
        });
    });

    it.skip('fixtureVen', function()
    {
        cy.fixture('addPurcVEN.json').then((order) => {
          ln.fillPODetails2(order);
        });
    });


})