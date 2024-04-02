/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    describe('Fazer um pedido de 4 produtos',() => {
        it('Deve fazer login com sucesso - Usando Comandos customizados e adicionar 4 produtos ao carrinho', () => {
            cy.login('josy.teste@teste.com', 'teste@123')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, josy.teste (não é josy.teste? Sair)')
       
            let qtd = 1;
            produtosPage.visitarProduto('Apollo Running Short');
            produtosPage.addProdutoCarrinho('34', 'Black', qtd);
            cy.get('.woocommerce-message').should('contain' , '“Apollo Running Short” foi adicionado no seu carrinho.')

            qtd = 5;
            produtosPage.visitarProduto('Aether Gym Pant');
            produtosPage.addProdutoCarrinho('36', 'Blue', qtd);
            cy.get('.woocommerce-message').should('contain' , qtd + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
        
            qtd = 2;
            produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt');
            produtosPage.addProdutoCarrinho('L', 'Green', qtd);
            cy.get('.woocommerce-message').should('contain' , qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')

            qtd = 3;
            produtosPage.visitarProduto('Celeste Sports Bra');
            produtosPage.addProdutoCarrinho('S', 'Red', qtd);
            cy.get('.woocommerce-message').should('contain' , qtd + ' × “Celeste Sports Bra” foram adicionados no seu carrinho.')
        
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#select2-billing_country-container').type('BR').click()
            cy.get('#billing_address_1').type(faker.location.street())
            cy.get('#billing_city').type(faker.location.city())
            cy.get('#select2-billing_state-container').type('CE').click()
            cy.get('#billing_postcode').clear().type('60600123')
            cy.get('#billing_phone').clear().type('8599009999')
            cy.get('.wc_payment_methods').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()

            cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
        });

            

    });


});



