/// <reference types="cypress" />

describe('Home page', () => {
  describe('Header', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('should visit', () => {
      cy.title().should('eq', 'Rental App')
    })

    it('should have title, subtitle ', () => {
      cy.contains('Rethink your living & renting')
      cy.contains('Make your stay painless with us')
    })

    it('should have header links ', () => {
      const links = ['Explore', 'About Us', 'Cities', 'Call']

      links.forEach((link) => {
        cy.contains(link)
      })
    })

    it('should have header links ', () => {
      const links = ['Explore', 'About Us']

      links.forEach((link) => {
        cy.visit('/')
        cy.contains(link).click()
        cy.hash().should('eq', `#${link.split(' ').join('-').toLowerCase()}`)
      })
    })

    context('macbook-13', () => {
      it('should hide hamburger', () => {
        cy.viewport('macbook-13')
        cy.visit('/')
        cy.get('nav #barIcon').should('not.exist')
      })
    })

    context('iphone-6', () => {
      beforeEach(() => {
        cy.viewport('iphone-6')
      })

      it('hides full header', () => {
        cy.visit('/')
        cy.get('nav #barIcon').should('be.visible')
      })
    })
  })

  describe('Form', () => {
    it('should have city, guests, date form fields and search button', () => {
      cy.get(`input[name='city']`)
        .should('have.value', '')
        .get(`input[name='guests']`)
        .should('have.value', '')
        .get(`input[name='date']`)
        .should('have.value', '')

      cy.get('#searchBtn').should('be.visible')
    })

    it('should log form values', () => {
      cy.visit('/', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog')
        },
      })

      cy.get(`input[name='city']`)
        .type('Planet')
        .should('have.value', 'Planet')
        .get(`input[name='guests']`)
        .type('Gru')
        .should('have.value', 'Gru')
        .get(`input[name='date']`)
        .type('29-10-2022')
        .should('have.value', '29-10-2022')
        .get('#searchBtn')
        .click()

      cy.get('@consoleLog').should('be.calledWith', 'form values', {
        city: 'Planet',
        guests: 'Gru',
        date: '29-10-2022',
      })
    })
  })
  describe('Explore', () => {
    it('should have sub-title and 2 products ', () => {
      cy.contains('Explore').click()
      cy.contains('From one-guest rooms to penthouses with pools and gardens').should('be.visible')
      cy.get('#products #product').should(($product) => {
        expect($product).to.have.length(2)
      })
    })
  })

  describe('Footer', () => {
    it('should have copyright text', () => {
      cy.scrollTo('bottom')
      cy.contains('Company Name All rights reserved')
    })

    it('should have nav links', () => {
      cy.scrollTo('bottom')
      cy.contains('Company Name All rights reserved')
      const links = ['Explore', 'About Us', 'Cities', 'Call']
      links.forEach((link) => {
        cy.contains(link)
      })
    })
  })

  describe('About Us', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.contains('About Us').click()
    })
    it('should have sub-title ', () => {
      cy.contains('Allow us to tell you a short story').should('be.visible')
    })
  })
})
