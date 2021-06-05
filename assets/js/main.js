//code surround color
const colorFromImput = document.querySelector("[data-color-input]");

function SurroundColor() {
    document.querySelector("[data-textarea-external-color]").style.background = colorFromImput.value;
}

colorFromImput.addEventListener("input", SurroundColor);


//text editor
const areaDoCodigo = document.querySelector("[data-codigo-wrapper]");
const linguagem = document.querySelector("[data-linguagens]");
const botao = document.querySelector("[data-botao-highlight]");

function mudaLinguagem() {
    let codigo = document.querySelector("[data-textarea-code]");
    areaDoCodigo.innerHTML = `<code class = "sessao-principal__container__campo__code hljs ${linguagem.value}" data-textarea-code contenteditable="true" aria-label="editor"></code>`;
    areaDoCodigo.firstChild.innerText = codigo.innerText;
}

linguagem.addEventListener("change", () => {
    mudaLinguagem();
})

botao.addEventListener("click", () => {
    const codigo = areaDoCodigo.querySelector("code");
    hljs.highlightElement(codigo);
})


