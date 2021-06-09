const todosOsProjetos = document.querySelector("[data-todos-projetos]")
const botaoLimpar = document.querySelector("[data-limpar]");
const botaoLimparHidden = document.querySelector("[data-limpar-hidden]");

//botoes que limpam o localStorage
botaoLimpar.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload()
});
botaoLimparHidden.addEventListener("click", () => {
  localStorage.clear();
  window.location.reload();
});

//logica do armazenamento de codigo
new function () {
    mostraProjetos();
}

function mostraProjetos(){
    if(localStorage.length == 0){
        return;
    }
    let projetos = [];
    for(let i = 0; i < localStorage.length; i++){
        projetos.push(JSON.parse(localStorage.getItem(i)));
    } //esse statment adiciona os objetos salvos em um array chamado projetos.
    projetos.forEach(projeto => {
        todosOsProjetos.innerHTML += montaCartao(projeto);
        // para cada item do array projetos da classe projeto, a função irá adicionar um cartao montado em html ao elemento com o atributo data set data-todos-projetos. 
        const codigoHTML = todosOsProjetos.querySelector(`[data-id='${projeto.id}']`);

        codigoHTML.querySelector("code").innerText = projeto.detalhesDoProjeto.codigo;
        //o innerText foi usado no lugar de InerHTML pq estamos interessados no codigo em si e não em sua execução.
    })
}

function montaCartao(projeto){

  let cartao =
  `
  <article class="exposicao__item" a data-id="${projeto.id}">
    <div class="exposicao__item__container">
      <div class="exposicao__item__container__project" style="background-color: ${projeto.detalhesDoProjeto.surroundColor}">
        <div class="exposicao__item__container__project__content">
          <img src="../assets/images/mac_buttons.svg" alt="mac buttons">
          <div class="exposicao__item__container__project__content__interior data-codigo-wrapper">
            <code class="exposicao__item__interior__code hljs"></code>
          </div>
        </div>
      </div>
      <div class="exposicao__item__container__dados">
        <h1>${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>
        <p class="exposicao__item__container__dados__descricao-projeto">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
      </div>
      <div class="exposicao__item__container__informacao-adicional">
            <div class="exposicao__item__container__informacao-adicional__trend">
                <img src="../assets/images/message_icon.svg" alt="message icon">
                <p>9</p>
                <img src="../assets/images/like_icon.svg" alt="">
                <p>9</p>
            </div>
            <button class="exposicao__item__container__informacao-adicional__tag ${projeto.detalhesDoProjeto.linguagem}">${projeto.detalhesDoProjeto.linguagem}</button>
            <div class="exposicao__item__container__informacao-adicional__developer">
                <img src="../assets/images/Photo.svg" alt="profile photo">
                <p>@Harry</p>
            </div>
        </div>
    </div>
  </article>
  `
  return cartao;
}

