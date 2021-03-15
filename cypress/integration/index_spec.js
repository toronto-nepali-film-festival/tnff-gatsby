describe('Index', () => {
    it('users should be able to view the "/" page', () => {
      cy
        .visit('localhost:8000')
        .get('h1').contains('Toronto Nepali Film Festival');
    });
  });