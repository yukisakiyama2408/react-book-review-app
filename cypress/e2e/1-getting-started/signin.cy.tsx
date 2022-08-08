/// <reference types="cypress" />

describe("signin test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signin");
  });

  it("shows login", () => {
    cy.get("#email").should("have.value", true).type("email");
    cy.get('input[type="text"][name="password"]').type("cypress.io");
    cy.get('[type="button"]').click();
  });
});
