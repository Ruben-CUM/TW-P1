var arrayPalabra = [];
var palabra;
var maximo = 6;
var numIntentos = 0;
var Acertadas = [];
var letrasUtilizadas = [];
var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

function cargarDiccionario() {
    arrayPalabra = ["javascript", "programacion", "ordenador", "desarrollo", "web", "tecnologia"];
    palabra = arrayPalabra[Math.floor(Math.random() * arrayPalabra.length)].toUpperCase();
    console.log(palabra);
    muestraPalabra();
    cambiarPista();
}

function cambiarPista() {
    var pistaTexto = document.getElementById("pistaTexto");
    switch (palabra) {
        case "JAVASCRIPT":
            pistaTexto.textContent = "Es un lenguaje de programación de alto nivel ampliamente utilizado para crear contenido interactivo en páginas web.";
            break;
        case "PROGRAMACION":
            pistaTexto.textContent = "Es el proceso de diseñar, codificar, depurar y mantener el código fuente de programas de computadora.";
            break;
        case "ORDENADOR":
            pistaTexto.textContent = "Es una máquina electrónica que procesa datos según un conjunto de instrucciones almacenadas y produce resultados de salida.";
            break;
        case "DESARROLLO":
            pistaTexto.textContent = "Es el proceso de crear un producto de software.";
            break;
        case "WEB":
            pistaTexto.textContent = "Es un sistema de información que permite acceder y compartir contenido a través de Internet.";
            break;
        case "TECNOLOGIA":
            pistaTexto.textContent = "Es el conjunto de conocimientos técnicos, ordenados científicamente, que permiten diseñar y crear bienes o servicios que facilitan la adaptación al medio y satisfacen las necesidades de las personas.";
            break;
        default:
            pistaTexto.textContent = "Haz clic en 'Reiniciar' para obtener una nueva pista.";
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
    if (letrasUtilizadas.includes(letra)) {
        alert("¡Ya has utilizado esa letra!");
        return;
    }
    letrasUtilizadas.push(letra);
    document.getElementById("letrasUsadas").textContent = letrasUtilizadas.join(", ");

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
    location.reload();
}



window.onload = cargarDiccionario;