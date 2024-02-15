describe.only("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/en");
  });

  it("should render my name", () => {
    cy.get("h3").contains("Takish");
  });

  context("Navigation", () => {
    it("should go to contact page", () => {
      cy.getByData("contact-link").click();
      cy.location("pathname").should("eq", "/en/contact");
    });
    it("should go to about page", () => {
      cy.getByData("about-me").click();
      cy.location("pathname").should("eq", "/en/about-me");
    });
  });
});
