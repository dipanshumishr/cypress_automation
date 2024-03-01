import login_elements from "../pageobject/login";
import addpurchase from "../pageobject/purchaseorder"

const login = new login_elements();
const purchase = new addpurchase();

describe('login_page',function(){
    this.beforeEach(() => {
      cy.customBeforeLogin(); 
        
    });

    it('title_valid',function(){
        login.get_title().should('eq', 'SupplyChain');
    })

    it('url_verify',function(){
        login.get_url().should('eq',"https://sc-integration.vegrow.in/login");
    })

    it('username',function(){
        login.enterUsername('dipanshu.mishra@vegrow.in')
        .then(input => {
            expect(input).to.have.value('dipanshu.mishra@vegrow.in')
        })
    })

    it('passwordtxt',function(){
        login.enterUsername('dipanshu.mishra@vegrow.in')
        .then(input =>{
            expect(input).to.have.value('dipanshu.mishra@vegrow.in')
        })
        login.enterPassword('vegrow123')
        .then(input =>{
            expect(input).to.have.value('vegrow123')
        })
    })
    it('validation_positive',function(){
        login.enterUsername('dipanshu.mishra@vegrow.in')
        .then(input =>{
            expect(input).to.have.value('dipanshu.mishra@vegrow.in')
        })
        login.enterPassword('vegrow123')
        .then(input =>{
            expect(input).to.have.value('vegrow123')
        })
        login.clickSubmit();
        cy.wait(3000);
        login.get_url().should('eq','https://sc-integration.vegrow.in/app/home')
        login.clickprofile();
        login.get_username().should('have.text','dipanshu mishra');
    })

    it('validation_negative',function(){
        login.enterUsername('dipanshu.mishra@vegrow.in')
        .then(input =>{
            expect(input).to.have.value('dipanshu.mishra@vegrow.in')
        })
        login.enterPassword('vegrow12')
        .then(input =>{
            expect(input).to.have.value('vegrow12')
        })
        login.clickSubmit()
        .then(() => {
        login.get_url().should('eq',"https://sc-integration.vegrow.in/login");
            cy.on('window:alert', (text) => {
                expect(text).to.equal('Invalid username and password')
            }) 
        })
    })

    it('logout_function',function(){
        login.enterUsername('dipanshu.mishra@vegrow.in')
        .then(input =>{
            expect(input).to.have.value('dipanshu.mishra@vegrow.in')
        })
        login.enterPassword('vegrow123')
        .then(input =>{
            expect(input).to.have.value('vegrow123')
        })
        login.clickSubmit();
        cy.wait(2000);
        login.get_url().should('eq','https://sc-integration.vegrow.in/app/home')
        login.clickprofile();
        login.click_logout()
        .then(() => {
            login.get_url().should('eq',"https://sc-integration.vegrow.in/login")
            login.elements.usernameTxt().should("be.visible")
            .and('contain',"");
        })
    })
    it('credential verification using fixtures', () => {

            cy.fixture('login_data.json').then(users => {

                cy.wrap(users).as('users');
                login.enterUsername(users.validUser.username).then(input => {
                    expect(input).to.have.value(users.validUser.username);
                });
                login.enterPassword(users.validUser.password).then(input => {
                    expect(input).to.have.value(users.validUser.password);

                login.clickSubmit();
                cy.wait(2500);
                login.get_url().should('eq','https://sc-integration.vegrow.in/app/home')
                login.clickprofile();
                login.get_username().should('have.text','dipanshu mishra');

        
                });
            });
        });
        it('credential verification using fixtures negative', () =>{
            cy.fixture('login_data.json').then(users => {

                cy.wrap(users).as('users');
                login.enterUsername(users.invalidUser.username).then(input => {
                    expect(input).to.have.value(users.invalidUser.username);
                });
                login.enterPassword(users.invalidUser.password).then(input => {
                    expect(input).to.have.value(users.invalidUser.password);

                })
                login.clickSubmit()
                .then(() => {
                 login.get_url().should('eq',"https://sc-integration.vegrow.in/login");
                    cy.on('window:alert', (text) => {
                    expect(text).to.equal('Invalid username and password')
                }) 
               })
        })
        })
})