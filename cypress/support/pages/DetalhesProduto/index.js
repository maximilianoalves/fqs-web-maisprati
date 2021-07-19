const el = require('./elements').ELEMENTS;

class DetalhesProduto {
    adicionarListaDeProdutos() {
        cy.get(el.btnAdicionarNaLista).click();
    }
}

export default new DetalhesProduto();