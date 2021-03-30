beforeEach(() => {
  cy.visit(Cypress.env("https://my.brown.edu"));
})

describe("Check that the landing page is rendering as expected", () => {
  it("should display an image in the header", () => {
    cy.get("div.logo").find("img").should("exist");
  })

  it("should contain My.Brown.edu text", () => {
    cy.contains("My.Brown.edu");
  })
})