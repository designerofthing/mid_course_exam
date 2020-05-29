describe('User completes a form to get a greeting from FOAAS Api', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "`https://www.foaas.com/fascinating/:from",
      
    });
    cy.visit("/");
  });
  it('User can submit their details', () => {
    cy.get('#name-input').type('Thomas');
    cy.get('#button').should('contain', 'submit').click();
  }); 
  it('User can see their greeting', () => {
    cy.get('#greeting').should('contain', 'Fascinating');
  });
})
