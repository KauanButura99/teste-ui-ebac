/// <reference types='cypres' />

describe('Funcionalidade de login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('deve fazer login com sucesso', () => {
    cy.get('#username').type('josegabriel@gmail.com')
    cy.get('#password').type("12345")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  });

  it('Deve mostrar uma mensagem de erro no email inválido', () => {
    cy.get('#username').type('josegabri@gmail.com')
    cy.get('#password').type("12345")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
  });

  it.only('Deve mostra uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.get('#username').type('josegabriel@gmail.com')
    cy.get('#password').type("125")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para ')
  });



})