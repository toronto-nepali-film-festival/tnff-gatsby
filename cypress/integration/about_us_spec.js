describe("About Us", () => {
  it('users should be able to view the "/about" page', () => {
    cy.visit("/about")
      .get("h1")
      .contains("About Us")
      .get("h4")
      .contains("Curatorial Committee Selection Criteria");
  });
});
