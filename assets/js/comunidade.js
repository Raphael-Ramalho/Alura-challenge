const todosOsProjetos = document.querySelector("[data-todos-projetos]")

new function () {
    mostraProjetos()
}

function mostraProjetos(){
    if(localStorage.length == 0){
        return;
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++){
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    console.log(projetos)
}