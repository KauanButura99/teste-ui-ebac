class EndereçoPage {

  editarEndereçoFaturamento(nome, sobrenome, empresa, pais, endereço, edificio, cep, cidade, estado, tel) {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
    cy.get(':nth-child(1) > .title > .edit').click()

    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)

    cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type(endereço)
    cy.get('#billing_address_2').clear().type(edificio)
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_phone').clear().type(tel)
    cy.get(':nth-child(2) > .button').click()



  }

  editarEndereçoEntrega() {


  }

}

export default new EndereçoPage()