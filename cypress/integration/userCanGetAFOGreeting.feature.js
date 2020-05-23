describe('User completes a form to get a greeting from FOAAS Api', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://foaas.com/blackadder/:name/:from",
    });
    cy.visit("/");
  });
  it('User can submit their details', () => {
    cy.get('#name-input').type('Thomas');
    cy.get('#button').should('contain', 'submit').click();
  }); 
})
