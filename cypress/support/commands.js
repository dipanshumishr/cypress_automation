// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
import login_elements from "../pageobject/login";
import search from "../pageobject/searchPO";
const login = new login_elements();
const searchs = new search();

Cypress.Commands.add('customBeforeEach', () => {
    cy.visit("/login",{failOnStatusCode: false});
    login.enterUsername("dipanshu.mishra@vegrow.in");
    login.enterPassword("vegrow123");
    login.clickSubmit();
    cy.wait(3000);
    searchs.click_PO();
});

Cypress.Commands.add('customBeforeLogin', () => {
    cy.visit("/login",{failOnStatusCode: false});
    cy.wait(2000);   
});
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />