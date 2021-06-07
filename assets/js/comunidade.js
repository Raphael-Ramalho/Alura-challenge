const todosOsProjetos = document.querySelector("[data-todos-projetos]")

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
      <div class="exposicao__item__project" style="background-color: ${projeto.detalhesDoProjeto.surroundColor}">
        <div class="exposicao__item__project__content">
          <img src="assets/images/mac_buttons.svg" alt="mac buttons">
          <div class="exposicao__item__interior hljs ${projeto.detalhesDoProjeto.linguagem}">
            <code class="exposicao__item__interior__code hljs"></code>
          </div>
        </div>
      </div>
      <div class="exposicao__item__dados">
        <h1>${projeto.detalhesDoProjeto.nomeDoProjeto}</h1>
        <p class="exposicao__item__dados__descricao-projeto">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
        <div class="exposicao__item__dados__container">
          <div class="exposicao__item__dados__container__trend">
            <img src="assets/images/message_icon.svg" alt="message icon">
            <p>9</p>
            <img src="assets/images/like_icon.svg" alt="">
            <p>9</p>
          </div>
          <div class="exposicao__item__dados__container__developer">
            <img src="assets/images/Photo.svg" alt="profile photo">
            <p>@Harry</p>
          </div>
        </div>
      </div>
    </article>
    `
    return cartao;
}