function validarFormulario() {
    var libro = document.getElementById("libro").value;
    var horario = document.getElementById("horario").value;
    var dia = document.getElementById("dia").value;
    var telefono = document.getElementById("telefono").value;

    if (libro === "" || horario === "" || dia === "" || telefono === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    return true;
}

document.getElementById("telefono").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, '').replace(/^(\d{3})(\d{3})(\d{4})$/, '$1-$2-$3');
});

