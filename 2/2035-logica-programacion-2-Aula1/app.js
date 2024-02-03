let numeroSecreto = 0;
let numeroDeIntentos = 0;
let listaNumerosSorteados = []
let numeroMaximo = 10
console.log(numeroSecreto)



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;  
    
}
function intentoDeUsuario() {
    let numeroDeUsuario =parseInt(document.getElementById("valorUsuario").value);
   
    
console.log (numeroDeUsuario == numeroSecreto)
console.log (numeroDeIntentos);

if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento ("p",`¡Acertaste el numero secreto en ${numeroDeIntentos} ${(numeroDeIntentos === 1) ?"intento" : "intentos"}!`);
    document.getElementById("reiniciar").removeAttribute("disabled");
} 
else{
    //el usuario no acerto
    if(numeroDeUsuario<numeroSecreto){
        asignarTextoElemento ("p","¡El numero es mayor!");   
    }
    else{
        asignarTextoElemento ("p", "El numero es menor")
    }
    numeroDeIntentos++;
    limpiarcaja();
    
}
return;
}
function limpiarcaja(){
document.querySelector ("#valorUsuario").value=""; 
   
}
function generarNumeroSecreto(){
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
 console.log(numeroGenerado)
 console.log(listaNumerosSorteados)
//si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento ("p","ya se asignaron todos los numeros posibles");
}else {



 //si el numero esta generado en esta lista
 if (listaNumerosSorteados.includes(numeroGenerado))
{return generarNumeroSecreto();

 } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

    }
 

    
    
}
}
function condicionesIniciales(){
 asignarTextoElemento("H1","Juego del numero secreto");
 asignarTextoElemento("p",`ingrese un numero del 1 al 10]${numeroMaximo}`);
 numeroSecreto = generarNumeroSecreto();
 numeroDeIntentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
   condicionesIniciales();
   
   
   //inicializar intentos
    
     //desabilitar el boton "nuevo juego"
     document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales()
