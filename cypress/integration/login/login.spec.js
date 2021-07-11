/// <reference types="cypress" />

import Login from "../../support/Login";

const faker = require("faker"); 

describe('Login', () => {
    it('Realizar o login COM sucesso.', () => {
        // Acessar a página.
        Login.acessarLogin();
        // Realizar o login
        Login.preencherLogin("fulano@qa.com", "teste")
        // Validar o cadastro realizado com sucesso
        cy.get('h1').should('have.text', "Bem Vindo  Fulano da Silva")
    });

    it('Realizar o login SEM sucesso.', () => {
        // Acessar a página.
        Login.acessarLogin();
        // Realizar o login
        Login.preencherLogin("ronaldo@qa.com.br", "teste")
        // Validar o cadastro realizado com sucesso
        cy.get('.alert').should('have.text', "Email e/ou senha inválidos")
    });
})
