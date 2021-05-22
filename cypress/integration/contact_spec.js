describe('Contact', () => {
    it('users should be able to view the "/contact" page', () => {
      cy
        .visit('localhost:8000/contact')
        .get('h1').contains('Contact')
        .get('h4').contains('Email us: tnffcanada@gmail.com')
    });
  });