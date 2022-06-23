var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var conteinerDoll = document.querySelector(".container-doll");
var h3 = document.querySelector(".container-h3");
var paragraph = document.querySelector(".container-paragraph");
var resultado = document.querySelector(".text-result");
var botonCopiar = document.querySelector(".btn-copy");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarAlPortapapeles;



function encriptar() {
    ocultarAdelante();
    var area = recuperarText();
    resultado.textContent =encriptarTexto(area);   
}

function desencriptar() {
    ocultarAdelante();
    var area = recuperarText();
    resultado.textContent =desencriptarTexto(area);
}

function recuperarText (){
    var textarea = document.querySelector(".textarea");
    return textarea.value;
}

function ocultarAdelante() {
    conteinerDoll.classList.add("ocultar");
    h3.classList.add("ocultar");
    paragraph.classList.add("ocultar");

}

function encriptarTexto (mensaje) {
    var texto=mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++) {
        if(texto[i] == "a") 
        {
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e") 
        {
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i") 
        {
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o") 
        {
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u") 
        {
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

}
function desencriptarTexto (mensaje) {
    var texto=mensaje;
    var textoFinal = "";

    for(var i=0; i<texto.length; i++) {
        if(texto[i] == "a") 
        {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if(texto[i] == "e") 
        {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if(texto[i] == "i") 
        {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if(texto[i] == "o") 
        {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if(texto[i] == "u") 
        {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

}

function copiarAlPortapapeles(){
    var textoAsideAtras = document.querySelector(".text-result");
    var textArea = document.getElementById("textarea");
    textArea.value = textoAsideAtras.innerHTML;
    navigator.clipboard.writeText(textoAsideAtras.innerHTML);
    
 }

