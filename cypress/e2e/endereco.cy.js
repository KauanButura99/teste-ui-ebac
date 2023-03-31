/// <reference types='cypress' />
import enderecoPage from "../support/page-objects/endereco.page"

describe('Funcionalidade endereços - Faturamento e Entrega ', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.fixture('perfil-lock.json').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
    // cy.login('josegabriel@gmail.com ', '12345')
  });


  it.only('Deve fazer o cadastro de faturamneto com sucesso ', () => {
    enderecoPage.editarEndereçoFaturamento('Kauan', 'Butura', 'Ebac', 'Italia', 'Casa Verde', 'Casa', '80142',
      'Napoli', 'Napoli', '1123456789')

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
  });
});