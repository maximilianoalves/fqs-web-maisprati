const el = require('./elements').ELEMENTS;

class Home {
    acessarDetalheProdutos() {
        cy.get(el.detalhesProduto).first().click();
    }
}

export default new Home();