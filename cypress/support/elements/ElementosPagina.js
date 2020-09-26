//Classe para armazenar todos os elementos da página
class ElementosPagina {
    campoNome = () => { return 'input#nome' }
    campoEmail = () => { return 'input#email' }
    botaoPaginaCadastro = () => { return 'a[routerlink="usuarios/cadastrar"]' }
    botaoCadastrar = () => { return 'button.btn-success' }
    validaTexto = () => { return 'h5' }
    validaLista = () => { return 'ul.list-group li' }
    botaoPaginaLista = () => { return 'a[routerlink="usuarios"]' }
    
   
//    botaoCliqueMe = () => { return 'input[id="buttonSimple"]' }
  //  alert = () => { return 'input[id="alert"]' }
  //     botaoConfirm = () => { return 'input[id="confirm"]' }
   //    botaoPrompt = () => { return 'input[id="prompt"]' }
   //    tabela = () => { return '#tabelaSemJSF' }
   //    tabelaUsuario = () => { return 'table[id="elementosForm:tableUsuarios"' }
    //   botaoPopUp = () => { return 'input[id="buttonPopUpEasy"]' }
      // botaoPopUpMal = () => { return 'input[id="buttonPopUpHard"]' }
}

export default ElementosPagina;