
describe('Transações', () => {

    beforeEach(() =>{
        cy.visit("https://devfinance-agilizei.netlify.app/#");
    });

    it('Cadastrar uma entrada', () => {
        criarTransação("Pgm Combustivel", 450,"2020-02-13");

        cy.get('tbody tr td.description').should("have.text", "Pgm Combustivel");
    });

    
    it('Cadastrar uma saída', () => {
        criarTransação("Pgm Pensionista Saida", -450,"2020-02-13");
        
        cy.get('tbody tr td.description').should("have.text", "Pgm Pensionista Saida");
    });

    it('Excluir transação', () => {
        criarTransação("Pgm Pensionista Exclusão", -450,"2020-02-13");
        
        cy.contains('.description',"Pgm Pensionista Exclusão")
            .parent()
            .find('img')
            .click();

        
    });
});

function criarTransação(descricao, valor, data){
    cy.contains("Nova Transação").click();
    cy.get('#description').click().type(descricao);
    cy.get('#amount').click().type(valor);
    cy.get('#date').type(data);

    cy.contains('button', 'Salvar').click();
}

