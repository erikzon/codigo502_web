var editmode = true;

function changeTitle() {
    document.getElementById('datesTitle').innerHTML = document.getElementById('inputTitulo').value
}

function toggleMode() {
    if (editmode) {
        document.getElementById("botonModo").innerHTML = "&times; Salir Del Modo Edicion"
        document.getElementById("formDateEditor").classList.remove("hide")
    } else {
        document.getElementById("botonModo").innerHTML = "Modo Edicion"
        document.getElementById("formDateEditor").className += "hide"
    }
}

function fillSelect() {
    var Events = document.getElementById("datesTable")
    document.getElementById('selectDelete').innerHTML = '';
    for (let index = 1; index < Events.rows.length; index++) {
        var option = document.createElement("option"); 
        let currentRow = document.getElementById("datesTable").rows[index].cells;
        option.text = `${currentRow[0].innerHTML} | ${currentRow[1].innerHTML} | ${currentRow[2].innerHTML}`
        option.value = index
        document.getElementById('selectDelete').appendChild(option)
    }
}

function deleteEvent() {
    document.getElementById("datesTable").deleteRow(document.getElementById('selectDelete').value);
    console.log(document.getElementById('selectDelete').value);
    fillSelect()
}

function deleteAllEvents() {
    document.getElementById("datesTable").getElementsByTagName('tbody')[0].innerHTML = ''
}

function addEvent() {
    let tableRef = document.getElementById("datesTable").getElementsByTagName('tbody')[0]
    var newRow = tableRef.insertRow()
    var newCellDate = newRow.insertCell(0)
    var newCellPlace = newRow.insertCell(1)
    var newCellType = newRow.insertCell(2)
    var newDate = document.createTextNode(document.getElementById('inputDia').value);
    var newPlace = document.createTextNode(document.getElementById('inputLugar').value)
    var newType = document.createTextNode(document.getElementById('inputTipo').value);
    newCellDate.appendChild(newDate)
    newCellPlace.appendChild(newPlace)
    newCellType.appendChild(newType)
    //clean the input fields
    document.getElementById('buttonReset').click()
}

document.getElementById("botonModo").addEventListener("click", function () {
    editmode = !editmode
    toggleMode(editmode)
    fillSelect()
});

