describe("User can search for a Github user", () => {
  describe('User can enter a search param and clicks on search', () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: 'GET',
        url: 'http://localhost:3001/api',
        response: 'fixture:search_response.json',
      });
      cy.visit("/");
      cy.get('input').type('Barack');
      cy.get('button').contains('Search').click();
    });

    it('User can see first result', () => {
      cy.get('#result-item-681626').within(() => {
        cy.contains('barack');
        cy.contains('https://api.github.com/users/barack');
      });
    });
  });
});