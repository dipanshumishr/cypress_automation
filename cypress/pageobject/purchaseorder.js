class addPurchase
{
   addprlbl = "h2.MuiTypography-root";
   radioKg =  "[type='radio'][value='1']";
   radioUnit = "[type='radio'][value='2']";
   packaging ="input[name='purchase_items.0.packaging_type_id']";
   expectedUnit = "input[name='purchase_items.0.quantity']";
   iconClass = "svg.MuiSvgIcon-root"
   username_menu = 'ul.MuiList-root[role="menu"]>li[tabindex="0"]'; //username eq(1) 
   logout_menu = 'ul.MuiList-root[role="menu"]>li[tabindex="-1"]'; //logout eq(33)
   po_type = 'div#purchase_order_type';
   po_type_menu = 'ul[aria-labelledby="purchase_order_type"]'  //ul[aria-labelledby="purchase_order_type"][tabindex="-1"]
   po_type_dropdown = "svg.MuiSvgIcon-root"; //dropdown eq(4)
   packaging_label = 'label[id ="purchase_items.0.packaging_type_id"]';
   partner_label = 'label#partner-label';
   buyers_txt = 'input#buyers';
   buyers_name= 'span.MuiChip-label'; // eq(0) for first buyer, eq(1) for second buyer eq(n) based no of incharge or buyers
   buyers_clear= 'svg.MuiSvgIcon-root'; //clear eq(5)
   dropdown_clearicon = 'button.MuiButtonBase-root[title="Clear"]'; //eq(0) for buyers or first
   suppliers = 'input#partner';
   address = 'input[placeholder="Address"]';
   addFarmer = 'button[tabindex="0"][type="button"]'; //eq(2)
   addVendor = 'button[tabindex="0"][type="button"]'; //eq(1)
   micropocket_txt = '#micro_pocket';
   select_date = 'input[placeholder="Select Date"]';
   cancel_bottom = 'button[tabindex="0"][type="button"]';
   incharge_exec ='#field_executives';
   incharge_names ='.MuiChip-root[tabindex="-1"]>span';
   incharge_clear ='.MuiChip-root>svg.MuiSvgIcon-root';
   model = 'div#model';
   model_menu ='ul[tabindex="-1"][role="listbox"]';
   capitive_menu = 'ul[tabindex="-1"]>li[data-value="Capitive"]';
   requiredlbl = 'div>p.MuiFormHelperText-root';
   fruitname = 'input[id="purchase_items.0.product"]';
   skufield = 'input[id="purchase_items.0.sku"]';
   descfield = '[name="purchase_items.0.description"]';
   expected_weight = '[name="purchase_items.0.weight_in_kgs"]';
   agreed_value = '[name="purchase_items.0.agreed_value"]';
   add_fruit = "svg.MuiSvgIcon-root"; //eq(23)
   associate_supply = "#associate_supply_ph";
   upload_button = 'input[type="file"]';
   save_close = 'button[tabindex="0"][type="submit"]';  //eq(0)
   save_shipment = 'button[tabindex="0"][type="submit"]'; //eq(1)
  

   checkVisibility()
   {
    cy.get(this.radioKg).should('have.css', 'opacity', '1');
    cy.get(this.radioKg).should('be.visible',);
    cy.get(this.radioUnit).should('be.visible');
   }

   addPurchaseVerification()
   {
    cy.get(this.addprlbl).should('have.text','Add Purchase Order');
    cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/create");
   }

   backarrow()
   {
    cy.get(this.iconClass).eq(3).click();
    cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/list");
   }

   menu_pop()
   {
    cy.get(this.iconClass).eq(2).click();
    cy.get(this.username_menu).eq(1).should('have.text','Dipanshu');
    cy.get(this.logout_menu).eq(33).should('have.text','Logout');
   }
   logout_func()
   {
    cy.get(this.iconClass).eq(2).click();
    cy.get(this.logout_menu).eq(33).click();
   }
   simultanousClickKg()
   {
    cy.get(this.radioKg).check().should('be.checked');
    cy.get(this.radioUnit).should('not.be.checked');
   }
   simultanousClickUnit()
   {
    cy.get(this.radioUnit).check().should('be.checked');
    cy.get(this.radioKg).should('not.be.checked');
   // cy.get(this.packaging_label).should('have.text','Packaging');
   // cy.get(this.packaging).should('have.text','');
  //  cy.get(this.expectedUnit).should('have.text', '');
   }   
   radiobutton_check()
   {
    cy.get(this.radioUnit).check().should('be.checked');
    cy.get(this.packaging_label).should('have.text','Packaging');
    cy.get(this.packaging).should('have.text','');
    cy.get(this.expectedUnit).should('have.text', '');
   }
   po_typeNone()
   {
    cy.get(this.po_type).type('{enter}{enter}');
    cy.get(this.po_type).should('have.value','');
   }
   po_typeFarm()
   {
    cy.get(this.po_type).type('{enter}');
   // cy.get(this.po_type_menu).type('{downarrow}');
   // cy.get(this.po_type).type('{enter}');
   // cy.get(this.po_type).should('have.text','Farm Gate');
   // cy.get(this.partner_label).should('contain','Farmer');
   cy.get(this.po_type_menu).contains('Farm Gate').click();
   cy.get(this.po_type).should('have.text','Farm Gate');
   }
   po_typeVendor()
   {
   // cy.get(this.po_type).type('{enter}');
   // cy.get(this.po_type_menu).type('{downarrow}{downarrow}');
   // cy.get(this.po_type).type('{enter}');
   // cy.get(this.po_type).should('have.text','Vendor Purchase');
   cy.get(this.po_type).type('{enter}');
   cy.get(this.po_type_menu).contains('Vendor Purchase').click();
   cy.get(this.po_type).should('have.text','Vendor Purchase');

   }
   buyers_null()
   {
    cy.get(this.buyers_txt).should('have.text','');
   }

   buyers_func()
   {
    cy.get(this.buyers_txt).type('Dipanshu');
    cy.get(this.buyers_txt).wait(5000);  
    cy.get(this.buyers_txt).type('{downarrow}');
    cy.get(this.buyers_txt).type('{enter}');
    cy.get(this.buyers_name).should('have.text', 'Dipanshu');

   // cy.get(this.buyers_txt).should('contain','Dipanshu');  
   }
   buyers_name_clear()
   {
    cy.get(this.buyers_txt).type('Dipanshu');
    cy.get(this.buyers_txt).wait(5000);  
    cy.get(this.buyers_txt).type('{downarrow}');
    cy.get(this.buyers_txt).type('{enter}');
    cy.get(this.buyers_name).should('have.text', 'Dipanshu');
    cy.get(this.buyers_clear).eq(5).click()
    cy.get(this.buyers_txt).should('have.text','');
   }
   buyers_name_multi()
   {
    cy.get(this.buyers_txt).type('Dipanshu');
    cy.get(this.buyers_txt).wait(5000);  
    cy.get(this.buyers_txt).type('{downarrow}');
    cy.get(this.buyers_txt).type('{enter}');
    cy.get(this.buyers_name).should('have.text', 'Dipanshu');
    cy.get(this.buyers_txt).type('Rajiv S');
    cy.get(this.buyers_txt).wait(5000);  
    cy.get(this.buyers_txt).type('{downarrow}');
    cy.get(this.buyers_txt).type('{enter}');
    cy.get(this.buyers_name).eq(1).should('have.text', 'Rajiv S'); 
    
   }
   buyers_clearAll()
   {
    cy.get(this.buyers_txt).type('Dipanshu');
    cy.get(this.buyers_txt).wait(5000);  
    cy.get(this.buyers_txt).type('{downarrow}');
    cy.get(this.buyers_txt).type('{enter}');
    cy.get(this.buyers_name).should('have.text', 'Dipanshu');
    cy.get(this.buyers_txt).type('Rajiv S');
    cy.get(this.buyers_txt).wait(5000);  
    cy.get(this.buyers_txt).type('{downarrow}');
    cy.get(this.buyers_txt).type('{enter}');
    cy.get(this.buyers_name).eq(1).should('have.text', 'Rajiv S'); 
    cy.get(this.dropdown_clearicon).first().click();
    cy.get(this.buyers_txt).should('contain','');
   }

   suppliers_input()
   {
    cy.get(this.suppliers).type('9999999991');
    cy.get(this.suppliers).wait(3000); 
    cy.get(this.suppliers).type('{downarrow}');
    cy.get(this.suppliers).type('{enter}');
    cy.get(this.suppliers).should('have.value','Root2Fruti Farmers Pvt Ltd-Delhi, North Delhi-9999999991(Farmer, Supplier)');
   }
   supplier_clear()
   {
    cy.get(this.suppliers).type('9999999991');
    cy.get(this.suppliers).wait(3000); 
    cy.get(this.suppliers).type('{downarrow}');
    cy.get(this.suppliers).type('{enter}');
    cy.get(this.suppliers).should('have.value','Root2Fruti Farmers Pvt Ltd-Delhi, North Delhi-9999999991(Farmer, Supplier)');
    cy.get(this.dropdown_clearicon).eq(1).click();
    cy.get(this.suppliers).should('have.value','');
   }
   address_update()
   {
    cy.get(this.suppliers).type('9999999991');
    cy.get(this.suppliers).wait(3000); 
    cy.get(this.suppliers).type('{downarrow}');
    cy.get(this.suppliers).type('{enter}');
    cy.get(this.suppliers).should('have.value','Root2Fruti Farmers Pvt Ltd-Delhi, North Delhi-9999999991(Farmer, Supplier)');
    cy.get(this.address).should('have.value','Delhi, North Delhi, , Delhi')
   }
   micropocketf()
   {
    cy.get(this.micropocket_txt).type('3-Oddi');
    cy.get(this.micropocket_txt).wait(3000); 
    cy.get(this.micropocket_txt).type('{downarrow}');
    cy.get(this.micropocket_txt).type('{enter}');
    cy.get(this.micropocket_txt).should('have.value','3-Oddi');
   }
   
   select_datef()
   {
    cy.get(this.select_date).type(24012024);
    cy.get(this.select_date).should('have.value','24/01/2024');
   }
   cancel_func()
   {
    cy.get(this.cancel_bottom).eq(4).click();
    cy.url().should('eq',"https://sc-integration.vegrow.in/app/purchase-order/list");
   }
   incharge_execf()
   {
    cy.get(this.incharge_exec).type('Dayanand');
    cy.get(this.incharge_exec).wait(5000); 
    cy.get(this.incharge_exec).type('{downarrow}');
    cy.get(this.incharge_exec).type('{enter}'); 
    cy.get(this.incharge_names).should('have.text','Dayanand');
   }
   incharge_execClear()
   {
    cy.get(this.incharge_exec).type('Dayanand');
    cy.get(this.incharge_exec).wait(5000); 
    cy.get(this.incharge_exec).type('{downarrow}');
    cy.get(this.incharge_exec).type('{enter}'); 
    cy.get(this.incharge_names).should('have.text','Dayanand');
    cy.get(this.incharge_clear).click();
    cy.get(this.incharge_exec).should('not.have.text','Dayanand');
   }
   model_None()
   {
    cy.get(this.model).click();
    cy.get(this.model_menu).type('{enter}');
    cy.get(this.model).should('have.value','');
   }
   model_fixed()
   {
    cy.get(this.model).click();
   // cy.get(this.model_menu).type('{downarrow}');
   // cy.get(this.model_menu).type('{enter}');
   // cy.get(this.model).should('have.text','Fixed');
   cy.get('ul[role="listbox"][tabindex="-1"] li').contains('Fixed').click();
   cy.get(this.model).should('have.text','Fixed');
   }
   model_capitive()
   {
    cy.get(this.model).click();
   // cy.contains(this.capitive_menu,).click();
  /*  cy.get(this.model_menu).type('{downarrow}');
    cy.get(this.model_menu).type('{downarrow}');
    cy.get(this.model_menu).type('{enter}');
    */
   // cy.get(this.model).should('have.text','Capitive');

   cy.get('ul[role="listbox"][tabindex="-1"] li').contains('Capitive').click();
   cy.get(this.model).should('have.text','Capitive');
    }
    required_check()
    {
        cy.get(this.model).click();
        cy.get('ul[role="listbox"][tabindex="-1"] li').contains('None').click();
        cy.get(this.po_type).type('{enter}');
        cy.get(this.requiredlbl).should('have.text','Required');    
    }
    name_fruit(Fruit_name)
    {
        cy.get(this.fruitname).type(Fruit_name);
        cy.get(this.fruitname).wait(3000); 
        cy.get(this.fruitname).type('{downarrow}');
        cy.get(this.fruitname).type('{enter}');
        cy.get(this.fruitname).should('have.value',Fruit_name);
    }
    name_wrong_sku(Fruit_name,Fruit_name_second)
    {
        cy.get(this.fruitname).type(Fruit_name);
        cy.get(this.fruitname).wait(4000); 
        cy.get(this.fruitname).type('{downarrow}');
        cy.get(this.fruitname).type('{enter}');
        cy.get(this.fruitname).should('have.value',Fruit_name);

        cy.get(this.skufield).type("UROYL-90C-100-120");
        cy.get(this.fruitname).wait(4000); 
        cy.get(this.skufield).type('{downarrow}');
        cy.get(this.skufield).type('{enter}');
        cy.get(this.fruitname).type(Fruit_name_second);
        cy.get(this.fruitname).wait(4000); 
        cy.get(this.fruitname).type('{downarrow}');
        cy.get(this.fruitname).type('{enter}');
        cy.get(this.skufield).should('have.value',"UROYL-90C-100-120");
    }
    desc(test_text)
    {
        cy.get(this.descfield).type(test_text);
        cy.get(this.descfield).should('have.text',test_text);
    }
    expected_weight_positive(weight)
    {
        cy.get(this.expected_weight).type(weight);
        cy.get(this.expected_weight).should('have.value',weight);
    }
    expected_weight_negative(weight_non_numeric)
    {
        cy.get(this.expected_weight).clear();
        cy.get(this.expected_weight).type(weight_non_numeric);
        cy.get(this.expected_weight).should('have.value','');
    }
    agreed_value_positive(weight)
    {
        cy.get(this.agreed_value).type(weight);
        cy.get(this.agreed_value).should('have.value',weight);
    }
    agreed_value_negative(weight_non_numeric)
    {
        cy.get(this.agreed_value).clear();
        cy.get(this.agreed_value).type(weight_non_numeric);
        cy.get(this.agreed_value).should('have.value','');
    }
    add_button_func()
    {
        cy.get(this.fruitname).type('Pomegranate');
        cy.get(this.fruitname).wait(3000); 
        cy.get(this.fruitname).type('{downarrow}');
        cy.get(this.fruitname).type('{enter}');
        cy.get(this.add_fruit).eq(23).click();
        cy.get('[name="purchase_items.1.product"]').should('have.value','');
    }

    uploadimage()
    {
        cy.get(this.upload_button).scrollIntoView();
        cy.get(this.upload_button).selectFile("/Users/dipanshu/Desktop/Screenshot 2024-01-24 at 10.54.11 AM.png",{ force: true });
    }

    fillPODetails(order) {
        cy.get(this.po_type).type('{enter}');
        cy.get(this.po_type_menu).contains(order.po_type1).click();
        cy.get(this.po_type).should('have.text',order.po_type1);

        cy.get(this.buyers_txt).type(order.buyers1);
        cy.get(this.buyers_txt).wait(5000);  
        cy.get(this.buyers_txt).type('{downarrow}');
        cy.get(this.buyers_txt).type('{enter}');
        cy.get(this.buyers_name).should('have.text', order.buyers1);

        cy.get(this.buyers_txt).type(order.buyers2);
        cy.get(this.buyers_txt).wait(5000);  
        cy.get(this.buyers_txt).type('{downarrow}');
        cy.get(this.buyers_txt).type('{enter}');
        cy.get(this.buyers_name).eq(1).should('have.text', order.buyers2);

        cy.get(this.suppliers).type(order.supplier);
        cy.get(this.suppliers).wait(3000); 
        cy.get(this.suppliers).type('{downarrow}');
        cy.get(this.suppliers).type('{enter}');
        cy.get(this.suppliers).should('have.value','Root2Fruti Farmers Pvt Ltd-Delhi, North Delhi-9999999991(Farmer, Supplier)');

        cy.get(this.micropocket_txt).type(order.micropocket);
        cy.get(this.micropocket_txt).wait(3000); 
        cy.get(this.micropocket_txt).type('{downarrow}');
        cy.get(this.micropocket_txt).type('{enter}');
        cy.get(this.micropocket_txt).should('have.value',order.micropocket);

        cy.get(this.select_date).type(order.purchasedate);
        cy.get(this.select_date).should('have.value','24/01/2024');

        cy.get(this.incharge_exec).type(order.incharge);
        cy.get(this.incharge_exec).wait(3000); 
        cy.get(this.incharge_exec).type('{downarrow}');
        cy.get(this.incharge_exec).type('{enter}'); 
        cy.get(this.buyers_name).eq(2).should('have.text',order.incharge);

        cy.get(this.associate_supply).type(order.associate_supply);
        cy.get(this.associate_supply).wait(3000); 
        cy.get(this.associate_supply).type('{downarrow}');
        cy.get(this.associate_supply).type('{enter}'); 
        cy.get(this.associate_supply).should('have.value',order.associate_supply);

        cy.get(this.model).click();
        cy.get('ul[role="listbox"][tabindex="-1"] li').contains(order.model).click();
        cy.get(this.model).should('have.text',order.model);

        cy.get(this.fruitname).type(order.fruit);
        cy.get(this.fruitname).wait(3000); 
        cy.get(this.fruitname).type('{downarrow}');
        cy.get(this.fruitname).type('{enter}');
        cy.get(this.fruitname).should('have.value',order.fruit);

        cy.get(this.skufield).type(order.sku);
        cy.get(this.skufield).type('{downarrow}');
        cy.get(this.skufield).type('{enter}');
        cy.get(this.skufield).should('have.value',order.sku);

        cy.get(this.descfield).type(order.desc);
        cy.get(this.descfield).should('have.text',order.desc);

        cy.get(this.expected_weight).type(order.expected_weight);
        cy.get(this.expected_weight).should('have.value',order.expected_weight);

        cy.get(this.agreed_value).type(order.agreed_value);
        cy.get(this.agreed_value).should('have.value',order.agreed_value); 
        
        cy.get(this.save_shipment).eq(1).click();
        cy.title("eq","SupplyChain");

      }

      fillPODetails2(order) {
        cy.get(this.po_type).type('{enter}');
        cy.get(this.po_type_menu).contains(order.po_type1).click();
        cy.get(this.po_type).should('have.text',order.po_type1);

        cy.get(this.buyers_txt).type(order.buyers1);
        cy.get(this.buyers_txt).wait(5000);  
        cy.get(this.buyers_txt).type('{downarrow}');
        cy.get(this.buyers_txt).type('{enter}');
        cy.get(this.buyers_name).should('have.text', order.buyers1);

        cy.get(this.buyers_txt).type(order.buyers2);
        cy.get(this.buyers_txt).wait(5000);  
        cy.get(this.buyers_txt).type('{downarrow}');
        cy.get(this.buyers_txt).type('{enter}');
        cy.get(this.buyers_name).eq(1).should('have.text', order.buyers2);

        cy.get(this.suppliers).type(order.supplier);
        cy.get(this.suppliers).wait(3000); 
        cy.get(this.suppliers).type('{downarrow}');
        cy.get(this.suppliers).type('{enter}');
        cy.get(this.suppliers).should('have.value','Root2Fruti Farmers Pvt Ltd-Delhi, North Delhi-9999999991(Farmer, Supplier)');

        cy.get(this.micropocket_txt).type(order.micropocket);
        cy.get(this.micropocket_txt).wait(3000); 
        cy.get(this.micropocket_txt).type('{downarrow}');
        cy.get(this.micropocket_txt).type('{enter}');
        cy.get(this.micropocket_txt).should('have.value',order.micropocket);

        cy.get(this.select_date).type(order.purchasedate);
        cy.get(this.select_date).should('have.value','30/01/2024');

        cy.get(this.incharge_exec).type(order.incharge);
        cy.get(this.incharge_exec).wait(3000); 
        cy.get(this.incharge_exec).type('{downarrow}');
        cy.get(this.incharge_exec).type('{enter}'); 
        cy.get(this.buyers_name).eq(2).should('have.text',order.incharge);


        cy.get(this.model).click();
        cy.get('ul[role="listbox"][tabindex="-1"] li').contains(order.model).click();
        cy.get(this.model).should('have.text',order.model);

        cy.get(this.fruitname).type(order.fruit1);
        cy.get(this.fruitname).wait(3000); 
        cy.get(this.fruitname).type('{downarrow}');
        cy.get(this.fruitname).type('{enter}');
        cy.get(this.fruitname).should('have.value',order.fruit1);

        cy.get(this.skufield).type(order.sku1);
        cy.get(this.skufield).type('{downarrow}');
        cy.get(this.skufield).type('{enter}');
        cy.get(this.skufield).should('have.value',order.sku1);

        cy.get(this.descfield).type(order.desc1);
        cy.get(this.descfield).should('have.text',order.desc1);

        cy.get(this.expected_weight).type(order.expected_weight1);
        cy.get(this.expected_weight).should('have.value',order.expected_weight1);

        cy.get(this.agreed_value).type(order.agreed_value1);
        cy.get(this.agreed_value).should('have.value',order.agreed_value1); 
        
        cy.get(this.save_shipment).eq(1).click();
        cy.title("eq","SupplyChain");

      }
}
export default addPurchase;
