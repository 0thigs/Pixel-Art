let mainColor = ""

function Black() {
    mainColor = "black"
}

function Red() {
    mainColor = "red"
}

function Green() {
    mainColor = "green"
}

function Blue() {
    mainColor = "blue"
}

//---------------Color_Picker-------------------

function Picker() {
    let picker = document.getElementById("color_picker")
    mainColor = picker.value
}

//---------------Limpar-------------------

function Clear() {
    document.querySelectorAll('.empty').forEach(element => {
        element.style.backgroundColor = "white"
    })
}

//---------------Pixels-------------------

function Elementos() {
    document.querySelectorAll('.empty').forEach(element => {
        element.addEventListener('click', event => {
            element.style.backgroundColor = mainColor
        })
    });
}

Elementos()