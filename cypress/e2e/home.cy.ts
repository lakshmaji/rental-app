describe('Home page', () => {
  it('should visit', () => {
    cy.visit('/')
  })

  it('should have title, subtitle ', () => {
    cy.visit('/')
    cy.contains('Rethink your living & renting')
    cy.contains('Make your stay painless with us')
  })

  it('should have header links ', () => {
    const links = ['explore', 'about us', 'cities', 'call']

    
    cy.visit('/')

    cy.get('a').each(page => {
      cy.request(page.prop('href'))
    })
  
    // cy.contains('Make your stay painless with us')
  })

  it('should have sub-title ', () => {
    cy.visit('/')
  })

  // it('should have input filter box ', () => {
  //   cy.visit('/')
  //   cy.contains('')
  // })
})