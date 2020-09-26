/// <reference types="Cypress" />

import ElementosPagina from '../elements/ElementosPagina'
const elementosPagina = new ElementosPagina
const url = "https://dazzling-colden-af35e7.netlify.app/#"
//Classe que centralizar todos funcões utilizadas nos testes, contendo os scripts do cypress
class PaginaCadastro {
    // Acessar o site que será testado
    acessarPagina() {
        cy.visit(url)
    }
    //acessar a pagina de cadastro
    acessarPaginaCadastro() {
        cy.get(elementosPagina.botaoPaginaCadastro()).click()
    }
    //Funçao preechendos todos os campos de cadastro do usuario
    preencherFormulario(parametros) {
        parametros.hashes().forEach(element => {
            cy.get(elementosPagina.campoNome()).type(element.nome)
            cy.get(elementosPagina.campoEmail()).type(element.email)
           });
    }
    
    //Funçao para clicar em cadastrar
    clicarBotaoCadastrar() {
        cy.get(elementosPagina.botaoCadastrar()).click()
    }

  
    //Funçao para validar texto de sucesso do cadastro
    validarMensagemCadastro(msgEsperada) {
        cy.get(elementosPagina.validaTexto()).should('contain',msgEsperada)
    }

    //Funçao para acessar lista de cadastro
    acessarListaCadastro() {
        cy.get(elementosPagina.botaoPaginaLista()).click()
    }
    //Funçao para validar lista de cadastro
    validarListaCadastro(nome, email) {
        cy.get(elementosPagina.validaLista()).should('contain', nome, email)
    }

}

export default PaginaCadastro;