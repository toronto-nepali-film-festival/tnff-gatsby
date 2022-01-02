describe("Contact", () => {
  it('users should be able to view the "/contact" page', () => {
    cy.visit("/contact")
      .get("h1")
      .contains("Contact Us")
      .get("h5")
      .contains("Email us: tnffcanada@gmail.com")
      .get("h5")
      .contains("Instagram: @tnffcanada")
      .get("h5")
      .contains("Twitter: @tnffcanada")
      .get("h5")
      .contains("Facebook: Toronto Nepali Film Festival");
  });
});
