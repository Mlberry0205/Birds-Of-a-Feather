describe('As a user, when I load the application, I can see a collection of bird audios', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A', { fixture: 'allSounds'}).as('recordings')
    cy.visit('http://localhost:3000/')
    cy.wait('@recordings').then(() => {
      'response.ok'
    })
})

it('should display the navBar with application logo, button, tagline & country', () => {
  cy
    .get('.logo-img').should('be.visible')
    .get('.navbar-link').should('be.visible')
    .get('.tagline').should('be.visible')
    .get('.about-bird-cnt').should('be.visible')
})

it('should allow a user to use the search feature form', () => {
  cy
    .get('input').type('Brazil')
    .get('button')
    .click()   
})

it('should tell a user that their form input did not bring up any results and to try again', () => {
  cy
    .get('input').type('United States')
    .get('button')
    .click()   
})



it('should be able to click on the About Us button and be taken to the About page as well as go back home by clicking the logo', () => {
  cy
    .get('.about-us')
    .click()
    .get('.logo-img')
    .click()
})

it('should display all information and recording of each bird', () => {
  cy
    .get('.card')
    .get('.location').contains('Barbalha, Ceará')
    .get('.country').contains('Brazil')
    .get('.recorder').contains('Recorder:')
    .get('.audio')
})

it('Should be able to use the browser arrow buttons to go between the home page and AboutUs', () => {
    cy.visit("http://localhost:3000/AboutUs")
      .url().should('eq', 'http://localhost:3000/AboutUs')
      .go('back')
      .url().should('eq', 'http://localhost:3000/')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/AboutUs')
  }) 

  it('should be able to view the About us page', () => {
    cy.visit("http://localhost:3000/AboutUs")
      .get('p.text').contains('The bearded')
      .get('.about-bird-image')
  })

  it('should bring a user to the error page if the user types in a bad URL', () => {
    cy
      .visit('http://localhost:3000/fsdf')
      .get('h1.error-text').contains('Page not found')
      .get('p.error-text').contains(`We looked all`)
      .get('button.error-button').contains('Home')
    
  })


})