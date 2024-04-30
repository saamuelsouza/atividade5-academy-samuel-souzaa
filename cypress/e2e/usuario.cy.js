/// <reference types = "cypress"/>

const { faker } = require("@faker-js/faker");
const baseUrlBackEnd = Cypress.env("baseUrlBackEnd");
const baseUrlFrontend = Cypress.env("baseUrlFrontend");
const usuario = {
  name: `${faker.person.fullName()}`,
  email: "",
};

beforeEach(function () {
  cy.visit(`${baseUrlFrontend}/users`);
  usuario.email = `${faker.string.alpha(10)}@${faker.string.alpha(10)}.com`;
});

/*afterEach(function () {
  cy.screenshot();
});*/

describe("Cenários de teste da funcionalidade criar usuários", function () {
  describe("Cadastro de usuário", function () {
    it("Deve ocorrer um erro quando o email já estiver em uso", function () {
      cy.intercept("POST", "/api/v1/users", {
        statusCode: 422,
        body: {
          error: "User already exists.",
        },
      }).as("postUsuario");

      cy.get(".sc-gEvEer").click();
      cy.get("#name").type("thata");
      cy.get("#email").type("thata@gmail.com");
      cy.get(".sc-dAlyuH").click();

      cy.wait("@postUsuario");

      cy.get(".sc-dCFHLb").contains(
        "Este e-mail já é utilizado por outro usuário."
      ).should('be.visible');
    });


    it("Deve criar usuário com nome de 100 caracteres", function () {
      cy.nomeAteCem(`${faker.string.alpha(100)}`, usuario.email);
    });

    it("Não deve criar usuário com nome de 101 caracteres", function () {
      cy.nomeMaior(
        `${faker.person.firstName()} ${faker.string.alpha(101)}`,
        usuario.email
      );
    });

    it("Deve criar usuário com nome de 4 caracteres", function () {
      cy.nomeAteQuatro(`${faker.string.alpha(4)}`, usuario.email);
    });

    it("Não deve criar usuário com nome menor que 4 caracteres (3 caracteres)", function () {
      cy.menorQueQuatro(`${faker.string.alpha(3)}`, usuario.email);
    });

    it("Não deve criar usuário com nome vazio", function () {
      cy.nomeVazio(" ", usuario.email);
    });

    it("Deve criar usuário com email de 60 caracteres", function () {
      cy.emailNoLimite(
        usuario.name,
        `${faker.string.alpha(50)}` + "@gmail.com"
      );
    });

    it("Não deve criar usuário com email de 61 caracteres", function () {
      cy.emailMaior(usuario.name, `${faker.string.alpha(51)}` + "@gmail.com");
    });

    it("Não deve criar usuário com email vazio ", function () {
      cy.emailVazio(usuario.name, " ");
    });

    it("Não deve criar usuário com email faltando o @", function () {
      cy.faltaArroba(usuario.name, "faltaarroba.com");
    });
  });

  describe("Listar usuários", function () {
    it("Deve criar um usuário com sucesso (Caso não exista usuário cadastrado)", function () {
      cy.createUser(usuario.name, usuario.email);
    });

    it("Deve listar usuários cadastrados e permitir acesso as informações (dados do usuário)", function () {
      cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").eq(0).click();
    });

    it("Deve listar usuário pelo email", function () {
      cy.get(':nth-child(1) > .sc-dAbbOL > [data-test="userDataEmail"]').eq(0);
      cy.get(":nth-child(1) > .sc-feUZmu > #userDataDetalhe").click();
    });
  });

  describe("Pesquisar usuário", function () {
    it("Deve pesquisar usuário pelo email", function () {
      cy.intercept(
        "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users"
      ).as("buscarUsuarios");
      cy.wait("@buscarUsuarios");

      cy.contains("jaden_koss@gmail.com").should('be.visible');
    });

    it("Deve pesquisar usuário pelo nome", function () {
      cy.intercept(
        "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users"
      ).as("buscarUsuarios");
      cy.wait("@buscarUsuarios");

      cy.contains("Byron Gerlach").should('be.visible');
    });
  });

  describe("Atualizar um usuário", function () {
    it("Deve editar informações de um usuário cadastrado", function () {
      cy.editarUsuario(usuario.name);
    });

    it("Deve atualizar um usuário buscando pelo Id", function () {
      //Recurso pesquisar pelo ID no front ainda encontra-se indisponível.
    });

    it("Não deve atualizar dados caso nenhum usuário seja localizado pelo Id", function () {
      //Recurso pesquisar pelo ID no front ainda encontra-se indisponível.
    });
  });

  describe("Encontrar usuário", function () {
    it("Deve encontrar um usuário pelo ID único", function () {
      //Recurso pesquisar pelo ID no front ainda encontra-se indisponível.
    });

    it("Deve retornar mensagem de erro caso o usuário ID não seja encontrado", function () {
      //Recurso pesquisar pelo ID no front ainda encontra-se indisponível.
    });
  });


  describe("Remover um usuário", function () {
    it("Deve remover um usuário localizado pelo Id", function () {
      //Recurso pesquisar pelo ID no front ainda encontra-se indisponível.
    });

    it("Deve retornar mensagem de sucesso caso usuário a ser deletado não tenha sido encontrado pelo Id", function () {
      //Recurso pesquisar pelo ID no front ainda encontra-se indisponível.
    });
  });
});
