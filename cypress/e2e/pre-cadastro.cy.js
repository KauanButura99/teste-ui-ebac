/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade de pré-cadastro', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve cadastrar com sucesso', () => {
    let emailFaker = faker.internet.email()
    let senhaFaker = faker.internet.password()
    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()

    cy.get('#reg_email').type(emailFaker)
    cy.get('#reg_password').type(senhaFaker)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nomeFaker)
    cy.get('#account_last_name').type(sobrenomeFaker)
    cy.get('.woocommerce-Button').click()

    cy.get('.woocommerce-message').should('contain', "Detalhes da conta modificados com sucesso.")
  });

});