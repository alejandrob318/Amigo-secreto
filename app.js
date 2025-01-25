// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function validarEntrada(){
    let amigo = document.getElementById("amigo").value;
    if(amigo.trim() == ""){
        alert("por favor ingrese un numero valido");
        
    }else{
        agregarAmigo(amigo);
        listarAmigos(amigo);
    }
}
function agregarAmigo(amigo){
    amigos.push(amigo);
}

function listarAmigos(amigo){
    let lista = document.querySelector("#listaAmigos");
    let nombre = document.createElement("li");
    nombre.textContent = amigo; 
    lista.appendChild(nombre);

}

function sortearAmigo(){
    let amigoElegido = parseInt(Math.floor(Math.random()*amigos.length));
    return amigos[amigoElegido];
    
}
function mostrarAmigo(){
    let amigo = document.querySelector("#resultado");
    amigo.innerHTML = `el amigo sorteado es: ${sortearAmigo()}`
    limpiarNombre();

}

function limpiarNombre(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

}

let amigos= [];
