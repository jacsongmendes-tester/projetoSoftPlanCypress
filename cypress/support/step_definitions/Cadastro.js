import { When, Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";
import { And } from "cypress-cucumber-preprocessor/steps";
import PaginaCadastro from '../page_objects/PaginaCadastro'
const paginaCadastro = new PaginaCadastro
//Conexao entre as features e metodos de execucao.
Given("Que eu acesso a home page", () => {
    paginaCadastro.acessarPagina();
})

When("Acesso a pagina de cadastro", () => {
    paginaCadastro.acessarPaginaCadastro();
})

And("Devo preencher o formulario com os parametros", (parametros) => {
    paginaCadastro.preencherFormulario(parametros);
})

Then("Devo clicar no botao cadastrar", () => {
    paginaCadastro.clicarBotaoCadastrar();
})

And("Devo receber a mensagem {}", (msgEsperada) => {
    paginaCadastro.validarMensagemCadastro(msgEsperada);
})

And("Devo valida se usuario existe na lista de usuario", (nome,email) => {
    paginaCadastro.validarListaCadastro(nome,email);
})

When("Acesso a lista de usuarios", () => {
    paginaCadastro.acessarListaCadastro();
})