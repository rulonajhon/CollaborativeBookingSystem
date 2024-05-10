describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('RESERVE NOW').click();

    cy.contains('button[data-v-d4d83630]', 'Student').click();
    cy.visit('http://localhost:5173/login');
    cy.get('input[data-v-47199182][type="text"][placeholder="Student ID or UIC Email"]').type('YourStudentIDorEmailHere');
    cy.get('input[data-v-47199182][type="password"][placeholder="Password"]').type('YourPasswordHere');
    cy.contains('button[data-v-47199182]', 'Login').click();
//KULANGAN PA KAILANGAN PAG ALERT PARA SA EMPTY ANG NA LOGIN//
    cy.contains('a[data-v-47199182]', 'Sign up').click();
    cy.get('input[data-v-c3356de6][type="text"][placeholder="Student ID"]').type('YourStudentIDHere');
    cy.get('input[data-v-c3356de6][type="text"][placeholder="UIC Email"]').type('YourUICEmailHere');
    cy.get('input[data-v-c3356de6][type="password"][placeholder="Password"]').type('YourPasswordHere');

  })
})