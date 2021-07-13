const el = require('./elements').ELEMENTS;

class ListaDeProdutos {
    limparListaDeProdutos() {
        cy.get(el.btnLimparLista).first().click();
    }
}

export default new ListaDeProdutos();