/// <reference types='cypress' />
import enderecoPage from "../support/page-objects/endereco.page"
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e Entrega ', () => {

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.fixture('perfil-lock.json').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
    // cy.login('josegabriel@gmail.com ', '12345')
  });


  it('Deve fazer o cadastro de faturamneto com sucesso ', () => {
    enderecoPage.editarEndereçoFaturamento('Kauan', 'Butura', 'Ebac', 'Italia', 'Casa Verde', 'Casa', '80142',
      'Milano', 'Milano', '1123456789')

    cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
  });

  it('Deve fazer o cadastro de faturamneto com sucesso - Usando arquivo de dados', () => {
    enderecoPage.editarEndereçoFaturamento(dadosEndereco[0].nome,
      dadosEndereco[0].sobrenome,
      dadosEndereco[0].empresa,
      dadosEndereco[0].pais,
      dadosEndereco[0].Endereço,
      dadosEndereco[0].Edificio,
      dadosEndereco[0].Cep,
      dadosEndereco[0].Cidade,
      dadosEndereco[0].Estado,
      dadosEndereco[0].Tel)

  })
});