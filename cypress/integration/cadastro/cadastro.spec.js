/// <reference types="cypress" />
import CadastrarUsuarios from "../../support/CadastrarUsuarios";

const faker = require("faker"); 

describe('Cadastro', () => {
    it('Cadastrar um novo usuário.', () => {
        // Acessar a página.
        CadastrarUsuarios.acessarCadastroUsuarios();
        // realizar o cadastro de um usuário
        const nome = faker.name.findName()
        const email = faker.internet.email()
        const senha = "teste123";
        CadastrarUsuarios.criarUsuario(nome, email, senha);
        // Validar o cadastro realizado com sucesso
        cy.get('a.alert-link').should('have.text', "Cadastro realizado com sucesso")
    });
})
