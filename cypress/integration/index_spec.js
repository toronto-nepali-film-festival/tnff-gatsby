describe('Index', () => {
    it('users should be able to view the "/" page', () => {
      cy
        .visit('/')
        .get('footer').contains('© TNFF | Toronto Nepali Film Festival');
    });
  });