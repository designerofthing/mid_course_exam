describe('User can search for a Github user login name', () => {
  describe('User can enter a name and click search', () => {
    before(() =>{
      cy.server();
      cy.route({
        method: 'GET',
        url: 'https://api.github.com/search/users',
        response: 'fixture:search_response.json'
      });
      cy.visit('/');
      cy.get(input).type('Barack');
      cy.get('button').contains('Search').click();
    });
    
    it('Can see first result', () => {
      cy.get('result').contains('PresidentObama');
    });
  });
});