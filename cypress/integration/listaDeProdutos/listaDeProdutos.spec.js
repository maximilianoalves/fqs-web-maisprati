/// <reference types="cypress" />

import CadastrarUsuarios from "../../support/pages/CadastrarUsuarios";
import Home from "../../support/pages/Home";
import DetalhesProduto from "../../support/pages/DetalhesProduto";
import ListaDeProdutos from "../../support/pages/ListaDeProdutos";

const faker = require("faker"); 

describe('Lista de Produtos', () => {
    it('Adicionar um produto na lista de produtos', () => {
        // Criar um usuário normal.
        CadastrarUsuarios.acessarCadastroUsuarios();
        const nome = faker.name.findName()
        const email = faker.internet.email()
        const senha = "teste123";
        CadastrarUsuarios.criarUsuario(nome, email, senha);
        //Salvar a variavel.
        cy.get('div.card-body > .card-title').first().invoke('text').as("nomeDoPrimeiroProdutoListagem");
        // Acessar detalhe de um produto
        Home.acessarDetalheProdutos();
        cy.get('[data-testid=product-detail-name]').first().invoke('text').as('nomeDoPrimeiroProdutoDetalhe');
        cy.get('@nomeDoPrimeiroProdutoListagem').then((text) => {
            cy.get('@nomeDoPrimeiroProdutoDetalhe').should('equal', text)
        });
        DetalhesProduto.adicionarListaDeProdutos();
        cy.get('[data-testid=shopping-cart-product-name]').first().invoke('text').as("nomeDoPrimeiroProdutoListaDeProdutos");
        cy.get('@nomeDoPrimeiroProdutoDetalhe').then((text) => {
            cy.get('@nomeDoPrimeiroProdutoListaDeProdutos').should('contain', text);
        })
        ListaDeProdutos.limparListaDeProdutos();
    });
})