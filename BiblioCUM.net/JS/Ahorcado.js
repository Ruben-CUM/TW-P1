var arrayPalabra = []; 
var palabra; 
var maximo = 6; 
var numIntentos = 0; 
var Acertadas = [];
var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

function cargarDiccionario() {
    arrayPalabra = ["javascript", "programacion", "computadora", "desarrollo", "web", "tecnologia"];
    palabra = arrayPalabra[Math.floor(Math.random() * arrayPalabra.length)].toUpperCase();
    console.log(palabra);
    muestraPalabra();
    cambiarPista();
}

function cambiarPista() {
    var pistaTexto = document.getElementById("pistaTexto");
    switch (palabra) {
        case "JAVASCRIPT":
            pistaTexto.textContent = "Es un lenguaje de programación de alto nivel.";
            break;
        case "PROGRAMACION":
            pistaTexto.textContent = "Es el proceso de diseñar, codificar, depurar y mantener el código fuente de programas de computadora.";
            break;
        case "COMPUTADORA":
            pistaTexto.textContent = "Es una máquina electrónica que recibe y procesa datos para convertirlos en información útil.";
            break;
        case "DESARROLLO":
            pistaTexto.textContent = "Es el proceso de crear un producto de software.";
            break;
        case "WEB":
            pistaTexto.textContent = "Es un sistema de información que se accede a través de Internet.";
            break;
        case "TECNOLOGIA":
            pistaTexto.textContent = "Es el conjunto de conocimientos técnicos, ordenados científicamente, que permiten diseñar y crear bienes o servicios que facilitan la adaptación al medio y satisfacen las necesidades de las personas.";
            break;
        default:
            pistaTexto.textContent = "JHGFDSJHASYDGFKAS";
            break;
    }
}

function muestraHorca() {
    ctx.beginPath();
    ctx.lineWidth = 4;
    switch (numIntentos) {
        case 1:
            // Dibujar poste vertical
            ctx.moveTo(50, 350);
            ctx.lineTo(50, 50);
            break;
        case 2:
            // Dibujar travesaño superior
            ctx.moveTo(50, 50);
            ctx.lineTo(200, 50);
            break;
        case 3:
            // Dibujar cuerda
            ctx.moveTo(200, 50);
            ctx.lineTo(200, 100);
            break;
        case 4:
            // Dibujar cabeza
            ctx.arc(200, 130, 30, 0, Math.PI * 2);
            break;
        case 5:
            // Dibujar cuerpo
            ctx.moveTo(200, 160);
            ctx.lineTo(200, 250);
            break;
        case 6:
            // Dibujar brazo izquierdo
            ctx.moveTo(200, 180);
            ctx.lineTo(150, 200);
            // Dibujar brazo derecho
            ctx.moveTo(200, 180);
            ctx.lineTo(250, 200);
            // Dibujar pierna izquierda
            ctx.moveTo(200, 250);
            ctx.lineTo(170, 300);
            // Dibujar pierna derecha
            ctx.moveTo(200, 250);
            ctx.lineTo(230, 300);
            break;
    }
    ctx.stroke();
}

function comprobarLetra() {
    var letra = document.getElementById("letra").value.toUpperCase();
    document.getElementById("letra").value = "";
    if (palabra.includes(letra)) {
        Acertadas.push(letra);
        muestraPalabra();
    } else {
        numIntentos++;
        muestraHorca();
    }
    document.getElementById("intentos").innerHTML = "Intentos restantes: " + (maximo - numIntentos);
    if (numIntentos >= maximo) {
        alert("¡Has perdido! La palabra era: " + palabra);
        reiniciar();
    }
}

function muestraPalabra() {
    var palabraMostrada = "";
    for (var i = 0; i < palabra.length; i++) {
        if (Acertadas.includes(palabra[i])) {
            palabraMostrada += palabra[i] + " ";
        } else {
            palabraMostrada += "_ ";
        }
    }
    document.getElementById("palabra").innerHTML = palabraMostrada;
    if (palabraMostrada.replace(/ /g, "") === palabra) {
        alert("¡Has ganado!");
        reiniciar();
    }
}

function reiniciar() {
    numIntentos = 0;
    Acertadas = [];
    document.getElementById("intentos").innerHTML = "Intentos restantes: " + (maximo - numIntentos);
    cargarDiccionario();
}



window.onload = cargarDiccionario;