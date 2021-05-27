describe('Index', () => {
    it('users should be able to view the "/" page', () => {
      cy
        .visit('/')
        .get('footer').contains('© TNFF | Toronto Nepali Film Festival')
        .get('p').contains('Toronto Nepali Film Festival (TNFF) is a not for profit organization based in Toronto, Ontario. Partnering with organizations in Canada, Nepal and beyond, TNFF brings a festival of extraordinary Nepali films in Toronto and other cities. By featuring films of South Asia, specifically Nepal, TNFF intends to add a fresh dimension to the multi-layered diasporic narratives of Canada.');
    });
  });