describe("contact page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/en/contact");
  });
  it("should render contact title", () => {
    cy.get("h2").contains("Contact");
  });
  it("should fail, sends already sent error", () => {
    cy.getByData("name").type("Test 1");
    cy.getByData("message").type("Hello worlad!!!!!");
    cy.getByData("email").type("claw@wd.wda");
    cy.get("button").eq(1).click();
    cy.getByData("error");
  });
  it("should send the email", () => {
    cy.getByData("name").type("Test 1");
    cy.getByData("message").type("Hello wo realaa rlad!!!!!");
    cy.getByData("email").type("claw@wd.wda");
    cy.get("button").eq(1).click();
    cy.getByData("success");
  });
});
