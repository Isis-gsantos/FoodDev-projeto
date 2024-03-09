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

  it('Checks if the buy button is working and leads to the buy page', ()=> {
    
  })
})