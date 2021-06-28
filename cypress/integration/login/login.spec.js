/// <reference types="cypress" />

const faker = require("faker"); 

describe('Login', () => {
    it('Realizar o login COM sucesso.', () => {
        // Acessar a página.
        cy.visit('/')
        // Adicionar um email usuário utilizando o data-testid
        cy.get('[data-testid=email]').type("beltrano@qa.com.br")
        // Adicionar uma senha utilizando o data-testid
        cy.get('[data-testid=senha]').type("teste")
        // Clicar no botão entrar utilizando o data-testid (Seletor especifico para automação)
        cy.get('[data-testid=entrar]').click()
        // Validar o cadastro realizado com sucesso
        cy.get('h1').should('have.text', "Bem Vindo  Fulano da Silva")
    });

    it('Realizar o login SEM sucesso.', () => {
        // Acessar a página.
        cy.visit('/')
        // Adicionar um email usuário utilizando o data-testid
        cy.get('[data-testid=email]').type("ronaldo@gmail.com.br")
        // Adicionar uma senha utilizando o data-testid
        cy.get('[data-testid=senha]').type("teste")
        // Clicar no botão entrar utilizando o data-testid (Seletor especifico para automação)
        cy.get('[data-testid=entrar]').click()
        // Validar o cadastro realizado com sucesso
        cy.get('.alert').should('have.text', "Email e/ou senha inválidos")
    });
})
