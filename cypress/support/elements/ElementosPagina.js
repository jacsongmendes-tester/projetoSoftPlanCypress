//Classe para armazenar todos os elementos da página
class ElementosPagina {
    campoNome = () => { return 'input#nome' }
    campoEmail = () => { return 'input#email' }
    botaoPaginaCadastro = () => { return 'a[routerlink="usuarios/cadastrar"]' }
    botaoCadastrar = () => { return 'button.btn-success' }
    validaTexto = () => { return 'h5' }
    validaLista = () => { return 'ul.list-group li' }
    botaoPaginaLista = () => { return 'a[routerlink="usuarios"]' }   
} 

export default ElementosPagina;