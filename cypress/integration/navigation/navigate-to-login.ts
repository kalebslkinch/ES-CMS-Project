describe('Navigate to Login page', () => {
    it('should navigate to the Login page', () => {
      // Start from the index page
    cy.visit('http://localhost:3000/')

      cy.get("button").contains("Login to CMS").click()
    cy.url().should('include','/login')
  })
});
export {}
