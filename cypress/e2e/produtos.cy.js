/// <reference types='cypress' />

describe('Fucionalidade página de produtos ', () => {

  beforeEach(() => {
    cy.visit('produtos/')
  });

  it('Deve selecionar um item da lista', () => {
    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
      //.first()
      //.last()
      //.eq(3)
      .contains('Atomic Endurance Running Tee (Crew-Neck)')
      .click()
  });
  it.only('Deve colocar o item no carrinho', () => {
    let quantidade = 3

    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

  });
});