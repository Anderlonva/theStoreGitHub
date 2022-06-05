function limpiarErrores() {
    var errores = document.getElementsByClassName("error")
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = ""
    }
}

function validarFormulario(formulario) {

    limpiarErrores()
   
    if (formulario.validarNombre.value.trim().length == 0) {
        document.getElementById("errorNombre").innerText = "Campo Requerido"
        formulario.nombre.focus()
        return false
    }

    if (formulario.cantidad.value.trim().length == 0) {
        document.getElementById("errorCantidad").innerText = "Campo Requerido"
        formulario.cantidad.focus()
        return false
    }

    if (formulario.inventory.value.trim().length == 0) {
        document.getElementById("errorInventory").innerText = "Campo Requerido"
        formulario.cantidad.focus()
        return false
    }

    alert('Producto Creado')

    return true;
}


