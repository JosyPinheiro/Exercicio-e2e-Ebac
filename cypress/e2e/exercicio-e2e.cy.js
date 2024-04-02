/// <reference types="cypress" />
import produtosPage from "../support/page_objects/produtos.page";

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
        it('Deve fazer login com sucesso - Usando Comandos customizados', () => {
            cy.login('josy.teste@teste.com', 'teste@123')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, josy.teste (não é josy.teste? Sair)')
        });

        it('Deve visitar a página de produtos e adicionar 4 produtos ao carrinho', () => {
            let qtd = 1;
            produtosPage.visitarProduto('Apollo Running Short');
            produtosPage.addProdutoCarrinho('32', 'Black', qtd);
            cy.get('.woocommerce-message').should('contain' , '“Apollo Running Short” foi adicionado no seu carrinho.')
        });

        it('Deve visitar a página de produtos e adicionar 4 produtos ao carrinho', () => {
            let qtd = 5;
            produtosPage.visitarProduto('Aether Gym Pant');
            produtosPage.addProdutoCarrinho('36', 'Blue', qtd);
            cy.get('.woocommerce-message').should('contain' , qtd + ' × “Aether Gym Pant” foram adicionados no seu carrinho.')
        });

        it('Deve visitar a página de produtos e adicionar 4 produtos ao carrinho', () => {
            let qtd = 2;
            produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt');
            produtosPage.addProdutoCarrinho('L', 'Green', qtd);
            cy.get('.woocommerce-message').should('contain' , qtd + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        });

        it('Deve visitar a página de produtos e adicionar 4 produtos ao carrinho', () => {
            let qtd = 3;
            produtosPage.visitarProduto('Celeste Sports Bra');
            produtosPage.addProdutoCarrinho('S', 'Red', qtd);
            cy.get('.woocommerce-message').should('contain' , qtd + ' × “Celeste Sports Bra” foram adicionados no seu carrinho.')
        });

    
    });


});



