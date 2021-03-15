describe('Contact', () => {
    it('users should be able to view the "/contact" page', () => {
      cy
        .visit('localhost:8000/contact')
        .get('h1').contains('Contact')
        .get('a').contains('Email us');
    });
  });