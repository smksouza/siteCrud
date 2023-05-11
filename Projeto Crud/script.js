const crud = [];

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const email = document.getElementById("email");
const listaDado = document.getElementById("listaDado");

function enviar (){
    crud.push(nome.value)
    crud.push(cpf.value)
    crud.push(email.value)
    criaLista();
}

function criaLista (){
    const listaNome = document.createElement('li'); 
    const listaCpf = document.createElement('li'); 
    const listaEmail = document.createElement('li'); 
    listaDado.append(listaNome, listaCpf, listaEmail);
    listaNome.innerHTML = nome.value;
    listaCpf.innerHTML = cpf.value;
    listaEmail.innerHTML = email.value
    listaDado.style.listStyle = "none"
    excluir();
}

function excluir (){
    const btnExcluir = document.createElement('button');
    listaDado.append(btnExcluir);

    const imagemBotao = document.createElement('img');
    imagemBotao.src = "https://cdn-icons-png.flaticon.com/256/3405/3405244.png"
    imagemBotao.style.width = "24px"
    imagemBotao.style.borderStyle = "none"
    btnExcluir.append(imagemBotao)

}