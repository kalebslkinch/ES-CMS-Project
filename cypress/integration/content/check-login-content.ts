describe('Check content on login Page', () => {
    it('should contain the right content', () => {
        // Start from the index page
      cy.visit('http://localhost:3000/')
    //   Click the button to go to Login page 
      cy.get("button").contains("Login to CMS").click()
    //   Check if the URL contains /login at the end
      cy.url().should('include','/login')
    //   Check if the login page has the correct title
      cy.get('h1').contains("Login")
    })

  });

  export {}