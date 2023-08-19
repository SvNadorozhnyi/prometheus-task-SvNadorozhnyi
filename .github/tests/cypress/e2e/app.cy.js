describe('Demo  Web App Test', () => {
  
  it('Start page successfully loads', () => {
    cy.visit('/')
  });

  it('Start page shows right content', () => {
    const rightContent = '{name: Tobi, age: 3, species: ferret}';
    cy.visit('/');
    cy.get('p').should('contain', rightContent);
  });

  it('App uses database', () => {
    const rightContent = 'PONG';
    cy.visit('/redis');
    cy.get('p').should('contain', rightContent);
  });
});
