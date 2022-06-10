describe('Check content on login Page', () => {
    it('should contain the right content', () => {
        // Start from the index page
      cy.visit('http://localhost:3000/login')
    //   Get sign in with google button
      cy.get("span").contains("Sign in with Google")
    })

  });

  export {}