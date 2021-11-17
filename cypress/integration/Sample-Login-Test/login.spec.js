/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://taxactindia.in/");
  });

  it("displays two todo items by default", () => {
    cy.contains("Tax Act India").should("exist");
    cy.get("a#login").click();
    cy.url().should("include", "/login");
    cy.get("input[name=username]").first().type("Jayanth");
    cy.get("input[name=password]").type("Jayanth");
    cy.get("button[class=submit-btn]").first().click();
    cy.contains("Incorrect username or password").should("exist");
  });
});
