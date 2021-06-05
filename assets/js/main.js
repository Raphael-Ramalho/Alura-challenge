
function SurroundColor() {

    let colorFromImput = document.querySelector("[data-color-input]").value;

    document.querySelector("[data-textarea-external-color]").style.background = colorFromImput;

}


const areaDoCodigo = document.querySelector("[data-codigo-wrapper]");
const linguagem = document.querySelector("[data-linguagens]");
const botao = document.querySelector("[data-botao-highlight]");



function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector("[data-textarea-code]");
    console.log(codigo)
    areaDoCodigo.innerHTML = `<textarea class = "sessao-principal__container__campo__code hljs ${linguagem.value}" data-textarea-code contenteditable="true"></textarea>`;
    console.log(areaDoCodigo)
    areaDoCodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener("change", () => {
    mudaLinguagem();
})

botao.addEventListener("click", () => {
    const codigo = areaDoCodigo.querySelector("code");
    hljs.highlightBlock(codigo);
})


