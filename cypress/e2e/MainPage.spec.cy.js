/// <reference types="Cypress" />

describe('FoodDev Main Page', () => {
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
})