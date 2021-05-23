describe('About', () => {
    it('users should be able to view the "/about" page', () => {
      cy
        .visit('localhost:9000/about')
        .get('h1').contains('About TNFF')
        .get('p').contains('Toronto Nepali Film Festival (TNFF) is a not for profit organization based in Toronto, Ontario. Partnering with organizations in Canada, Nepal and beyond, TNFF brings a festival of extraordinary Nepali films in Toronto and other cities. By featuring films of South Asia, specifically Nepal, TNFF intends to add a fresh dimension to the multi-layered diasporic narratives of Canada.');
    });
  });