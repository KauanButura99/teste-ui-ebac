/// <reference types='cypres' />
const perfil = require('../fixtures/perfil-lock.json')

describe('Funcionalidade de login', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  it('deve fazer login com sucesso', () => {
    cy.get('#username').type('josegabriel@gmail.com')
    cy.get('#password').type("12345")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  });

  it('Deve fazer login com sucesso - Usando arquivo de Dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
  });

  it('Deve fazer login com sucesso - Usando arquivos de dados ', () => {
    cy.fixture('perfil-lock.json').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, { log: false })
      cy.get('.woocommerce-form > .button').click()
    })

  });

  it('Deve mostrar uma mensagem de erro no email inválido', () => {
    cy.get('#username').type('josegabri@gmail.com')
    cy.get('#password').type("12345")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
  });

  it('Deve mostra uma mensagem de erro ao inserir uma senha inválida', () => {
    cy.get('#username').type('josegabriel@gmail.com')
    cy.get('#password').type("125")
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para ')
  });



})