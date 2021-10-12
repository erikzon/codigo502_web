var editmode = true;

function toggleMode() {
    if (editmode) {
        document.getElementById("botonModo").innerHTML = "Salir Del Modo Edicion";
        document.getElementById("formDateEditor").classList.remove("hide");
    } else {
        document.getElementById("botonModo").innerHTML = "Modo Edicion";
        document.getElementById("formDateEditor").className += "hide";
    }

}

document.getElementById("botonModo").addEventListener("click", function () {
    editmode = !editmode
    toggleMode(editmode)
});