 describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');

    cy.contains('RESERVE NOW').click();

    cy.contains('Admin').click();
    cy.visit('http://localhost:5173/adminlogin');
    cy.get('input[placeholder="Admin Account"]').type('LIBRARIAN');
    cy.get('input[data-v-d2fe158d][type="password"][placeholder="Password"]').type('YourPasswordHere');
    cy.contains('button[data-v-d2fe158d]', 'Login').click();
    cy.visit('http://localhost:5173/home');

  });
 });