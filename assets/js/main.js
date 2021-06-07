
const colorFromImput = document.querySelector("[data-color-input]");
const areaDoCodigo = document.querySelector("[data-codigo-wrapper]");
const linguagem = document.querySelector("[data-linguagens]");
const botaoPreview = document.querySelector("[data-botao-highlight]");
const botaoSalvar = document.querySelector("[data-botao-salvar]")
const tituloProjeto = document.querySelector("[data-titulo-projeto]")
const descricaoProjeto = document.querySelector("[data-descricao-projeto]")



//code surround color
colorFromImput.addEventListener("input", SurroundColor);
//highlight area - text editor 
linguagem.addEventListener("change", () => {
    mudaLinguagem();
})
//highlight activation - button function
botaoPreview.addEventListener("click", () => {
    const codigo = areaDoCodigo.querySelector("code");
    hljs.highlightElement(codigo);
})
//botao salvar projeto
botaoSalvar.addEventListener("click", () => {
    if(typeof(Storage) !== "undefined") {
        //se for do tipo Storage e diferente de undefined (ou seja, se estiver definido):
        console.log("suporta o localStorage :)");
        const projeto = montaProjeto(); //const projetos recebe objeto projeto criado na função montaProjeto.
        salvaLocalStorage(projeto); //salva o objeto projeto no objeto localStorage
        console.log(projeto);
    }else{
        console.log("não suporta o localStorage :(");
    }
})



function SurroundColor() {
    document.querySelector("[data-textarea-external-color]").style.background = colorFromImput.value;
};

function mudaLinguagem() {
    let codigo = document.querySelector("[data-textarea-code]");
    areaDoCodigo.innerHTML = `<code class = "sessao-principal__container__campo__code hljs ${linguagem.value}" data-textarea-code contenteditable="true" aria-label="editor"></code>`;
    areaDoCodigo.firstChild.innerText = codigo.innerText;
}

function montaProjeto(){
    let projeto ={
        'id' : atribuiId(),
        'detalhesDoProjeto':{
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'surroundColor': colorFromImput.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        } 
    }
    return projeto;
}

function atribuiId() {
    return localStorage.length;
    // atribui um nome a cada id baseado em sua posição no array
}

function salvaLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson));; 
    //^O .stringfy transforma o objeto Json em string (necessário para armazenamento em outro objeto)
    //^O setItem (nome, valor) cria uma chave nome/valor no objeto ou atualiza o valor de uma existente.
}

//Limpar localStorage pelo console: localStorage.clear()

    



