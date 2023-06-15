///<references types="Cypress"/>
const faker = require("faker-br");

describe("Cadastro de Usuario", () => {
  //variaves
  const birthday = faker.date.past(30, 2000).toLocaleDateString();
  const password =
    faker.name.firstName() +
    '@'+
    faker.random.number();
  const confirmPassword = password;
  const firstName = faker.name.firstName(1);
  const headerName = firstName;


  // elementos css
  const register = ".natds40";
  const whatsappCheckbox = "#pushOptInWP";
  const accountCreate = ".MuiButton-outlined";
  const inputFirstName = '[placeholder="Insira seu primeiro nome"]';
  const lastName = '[placeholder="Insira seu sobrenome"]';
  const email = '[placeholder="Insira seu e-mail"]';
  const inputPassword = "#password-field";
  const inputConfirmPassword = "#confirmPassword-field";
  const cpf = '[placeholder="000.000.000-00"]';
  const inputBirthday = '[placeholder="DD/MM/AAAA"]';
  const notSpecific = ":nth-child(3) > .MuiTypography-root";
  const inputCellPhone = '[placeholder="(00) 0 0000-0000"]';
  const acceptTerms = "#acceptedterms";
  const buttonDone = '[type="submit"]';
  const nameLogin = '.MuiBox-root > .MuiTypography-subtitle2'

  it("Deve realizar cadastro com sucesso", () => {
    cy.visit("https://www.natura.com.br/");
    cy.get(register).click();
    cy.get(accountCreate).click();
    cy.get(inputFirstName).type(firstName);
    cy.get(lastName).type(faker.name.lastName(1));
    cy.get(email).type(faker.internet.email().toLowerCase());
    cy.get(inputPassword).type(password);
    cy.get(inputConfirmPassword).type(confirmPassword);
    cy.get(cpf).type(faker.br.cpf());
    cy.get(inputBirthday).type(birthday);

    cy.get(notSpecific).last().click();
    cy.get(inputCellPhone).first().type(faker.phone.phoneNumber());
    cy.get(whatsappCheckbox).check();
    cy.get(acceptTerms).click();
    cy.get(buttonDone).click();
    cy.get(nameLogin).contains(`Olá, ${headerName}!`);
  });
});
