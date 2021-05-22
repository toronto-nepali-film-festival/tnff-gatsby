describe('Index', () => {
    it('users should be able to view the "/" page', () => {
      cy
        .visit('localhost:8000')
        .get('footer').contains('© TNFF | Toronto Nepali Film Festival');
    });
  });