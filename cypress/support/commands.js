Cypress.Commands.add("criarUsuario", function (name, email) {
    //cria e limpa da base
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-gEvEer").click();
  cy.get(".sc-gsFSXq").type(email);
  cy.get(".sc-dcJsrY > :nth-child(1)").click();
  cy.get('[data-test="userDataDelete"]').click();
  cy.get("button.sc-lcIPJg.eIYdvr").click();
});

Cypress.Commands.add("emailRepetido", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-dCFHLb").contains(
    "Este e-mail já é utilizado por outro usuário."
  ).should('be.visible');
});

Cypress.Commands.add("nomeAteCem", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
});

Cypress.Commands.add("nomeMaior", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-cPiKLX").contains("Informe no máximo 100 caracteres para o nome").should('be.visible');
});

Cypress.Commands.add("nomeAteQuatro", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-gEvEer").click();
});

Cypress.Commands.add("menorQueQuatro", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-cPiKLX").contains("Informe pelo menos 4 letras para o nome.").should('be.visible');
});

Cypress.Commands.add("nomeVazio", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-cPiKLX").contains("Informe pelo menos 4 letras para o nome.").should('be.visible');
});

Cypress.Commands.add("emailNoLimite", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-gEvEer").click();
});

Cypress.Commands.add("emailMaior", function (name, email) {
  cy.get(".sc-gEvEer").click();
  cy.get("#name").type(name);
  cy.get("#email").type(email);
  cy.get(".sc-dAlyuH").click();
  cy.get(".sc-cPiKLX").contains(
    "Informe no máximo 60 caracteres para o e-mail"
  ).should('be.visible');
});

Cypress.Commands.add("emailVazio", function (name, email){
    cy.get(".sc-gEvEer").click();
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get(".sc-dAlyuH").click();
      cy.get(".sc-jEACwC").contains("O campo e-mail é obrigatório").should('be.visible');
})


Cypress.Commands.add("faltaArroba", function(name,email){
    cy.get(".sc-gEvEer").click();
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get(".sc-dAlyuH").click();
      cy.get(".sc-cPiKLX").contains("Formato de e-mail inválido").should('be.visible');
})

Cypress.Commands.add("createUser",function (name, email){
    cy.get(".sc-gEvEer").click();
      cy.get("#name").type(name);
      cy.get("#email").type(email);
      cy.get(".sc-dAlyuH").click();
})

Cypress.Commands.add("editarUsuario", function (name){
    cy.get("#paginacaoProximo").click();
      cy.get(".cMeuCM > .sc-feUZmu > #userDataDetalhe").click();
      cy.get('[type="button"] > .sc-dAlyuH').click();
      cy.get("#userName").type(name);
      cy.get(".dGvNqp > .sc-dAlyuH").click();
})

Cypress.Commands.add("criandoUsuario", function (name, email){
    cy.get(".sc-gEvEer").click();
    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get(".sc-dAlyuH").click();
    cy.get(".sc-gEvEer").click();
})
