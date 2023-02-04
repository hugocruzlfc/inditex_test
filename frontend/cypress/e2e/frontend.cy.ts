describe("Frontend app", function () {
  beforeEach(function () {
    cy.request("GET", "http://localhost:3001/api/products");
    cy.visit("http://localhost:3000");
  });

  describe("Landing page", () => {
    it("Header is show", function () {
      cy.contains("Templates");
      cy.contains("ZARA");
      cy.contains("Products in stock");
    });
  });

  
  describe("Go to templates container", () => {
    it("templates container", function () {
      cy.contains("Templates").click();
      cy.get("#add-template").contains("New Template")
    });
  });
 



 

 
});
