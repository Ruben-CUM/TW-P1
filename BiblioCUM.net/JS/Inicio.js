var imagenes = document.querySelectorAll('.imagen');
var index = 1;
imagenes[index].style.display = 'block';
function cambiarImagen(delta) {
    imagenes[index].style.display = 'none';
    index = (index + delta + imagenes.length) % imagenes.length;
    imagenes[index].style.display = 'block';
}