const el = require('./elements').ELEMENTS;

class CadastrarUsuarios {
    acessarCadastroUsuarios() {
        cy.visit('/cadastrarusuarios');
    }
    criarUsuario(nome, email, senha) {
        cy.get(el.nome).type(nome);
        cy.get(el.email).type(email);
        cy.get(el.senha).type(senha);
        cy.get(el.btnCadastrar).click();
    }
}

export default new CadastrarUsuarios();