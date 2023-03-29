/// <reference types='cypress' />

describe('Funcionalidade endereços - Faturamento e Entrega ', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.fixture('perfil-lock.json').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
    // cy.login('josegabriel@gmail.com ', '12345')
  });


  it('Deve fazer o cadastro de faturamneto com sucesso ', () => {

  });
});