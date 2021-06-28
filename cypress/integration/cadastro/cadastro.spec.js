/// <reference types="cypress" />

const faker = require("faker"); 

describe('Cadastro', () => {
    it('Cadastrar um novo usuário.', () => {
        // Acessar a página.
        cy.visit('/')
        // Clicar no botão cadastre-se utilizando o data-testid (Seletor especifico para automação)
        cy.get('[data-testid=cadastrar]').click()
        // Adicionar um nome aleatório utilizando o data-testid
        const nome = faker.name.findName()
        cy.get('[data-testid=nome]').type(nome)
        // Adicionar um email aleatório utilizando o data-testid
        const email = faker.internet.email()
        cy.get('[data-testid=email]').type(email)
        // Adicionar uma senha aleatório utilizando o data-testid
        cy.get('[data-testid=senha]').type("teste123")
        // Clicar no botão Cadastrar utilizando o data-testid (Seletor especifico para automação)
        cy.get('[data-testid=cadastrar]').click()
        // Validar o cadastro realizado com sucesso
        cy.get('a.alert-link').contains("Cadastro realizado com sucesso")
    });
})
