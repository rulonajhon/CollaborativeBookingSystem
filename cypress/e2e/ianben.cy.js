describe('Your Test Suite Name', () => {
  it('Visits the specified URL', () => {
      cy.visit('http://127.0.0.1:8000/docs#/');
 
      cy.get('button[aria-label="get ​/users​/student​/list"]').eq(0).click();
      cy.get('button.btn.try-out__btn').click();
      cy.get('.btn.execute.opblock-control__btn').click();
      cy.get('.btn.btn-clear.opblock-control__btn').click();
      cy.get('.try-out__btn.cancel').click();
      cy.get('.opblock-summary-method').first().click();

      cy.contains('POST').click();
      cy.get('.btn.try-out__btn').click();
      cy.get('.body-param__text').type('{selectall}{backspace}' +
  `{
  "StudentID": 190000001035,
  "Username": "ilabonete",
  "Password": "secret",
  "Name": "ian",
  "Email": "ilabonete@gmail.com"
}`);
      cy.get('.btn.execute.opblock-control__btn').click();
      cy.get('.btn.btn-clear.opblock-control__btn').click();
      cy.get('.btn.try-out__btn.reset').click();
      cy.get('.btn.try-out__btn.cancel').click();
      cy.get('.opblock-summary-method').eq(1).click();

    });
});