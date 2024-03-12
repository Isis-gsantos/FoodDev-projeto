/// <reference types="Cypress" />

describe('FoodDev Main Page', () => {
  
  const name = 'Lucas'
  const cardNumber = 1234123412341234
  const month = 11
  const year = 30
  const cvv = 123

   beforeEach(()=> {
    cy.visit('./index.html')
   }) 


  it('Checks the page title', () => {
    cy.title().should('be.equal', 'FoodDev')
  })

  it('Checks if the headers elements can be clicked and goes to the right div', ()=> {
    cy.get('#home').click().should('contain', 'Oferta Especial')
    cy.get('#sobre').click().should('contain', 'Sobre Nós')
    cy.get('#catalogo').click().should('contain', 'Faça sua escolha & Aproveite!')
    cy.get('#contato').click().should('contain', 'Contato')
  })

  it('Checks if the image slideshow can be clicked', ()=>{
    cy.get('.seta-avancar').click(4)
    cy.get('.seta-voltar').click(8)
  })

  it('Checks if the buy button on x-salada is working and leads to the buy page', ()=> {
    cy.get('.x-salada > .btn-comprar').click()
    cy.contains('form', 'Nome')
  })

  it('Checks if the buy button on x-tudo is working and leads to the buy page', ()=> {
    cy.get('.x-tudo > .btn-comprar').click()
    cy.contains('form', 'Nome')
  })

  it('Checks if the buy button on x-bacon is working and leads to the buy page', ()=> {
    cy.get('.x-bacon > .btn-comprar').click()
    cy.contains('form', 'Nome')
  })

  it('Checks if the houver works on the food icons', ()=> {
    cy.get('#hamburguer-icon > img').trigger('mouseover').should('have.css', 'scale')
    cy.get('#pizza-icon > img').trigger('mouseover').should('have.css', 'scale')
    cy.get('#sobremesa-icon > img').trigger('mouseover').should('have.css', 'scale')
    cy.get('.x-tudo > img').trigger('mouseover').should('have.css', 'scale')
    cy.get('.x-bacon > img').trigger('mouseover').should('have.css', 'scale')
    cy.get('.x-salada > img').trigger('mouseover').should('have.css', 'scale')
  })

  it('Goes to the buying page and  fill the form correctly, going back to the main page by the back icon', ()=> {
    cy.get('.x-bacon > .btn-comprar').click()
    cy.get('.voltar').should('be.visible')
    cy.get('#nome').type(name).should('have.value', name)
    cy.get('#numero-cartao').type(cardNumber).should('have.value', cardNumber)
    cy.get('#mes').type(month).should('have.value', month)
    cy.get('#ano').type(year).should('have.value', year)
    cy.get('#cvv').type(cvv).should('have.value', cvv)
    cy.get('#btn-validar').click()
    cy.get('.motoqueiro').should('be.visible')
    cy.get('.voltar').click()
    cy.contains('Home').should('be.visible')
  })

  it('Goes to the buying page and fails to fill the form correctly', ()=> {
    cy.get('.x-bacon > .btn-comprar').click()
    cy.get('.voltar').should('be.visible')
    cy.get('#nome').type('Lucas').should('have.value', 'Lucas')
    cy.get('#numero-cartao').type(1).should('have.value', '1')
    cy.get('#mes').type('1').should('have.value', '1')
    cy.get('#ano').type('2').should('have.value', '2')
    cy.get('#cvv').type('4444').should('have.value', '4444')
    cy.get('#btn-validar').click()
    cy.get('.motoqueiro').should('not.be.visible')
  })
})