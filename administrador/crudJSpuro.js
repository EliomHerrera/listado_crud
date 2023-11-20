let user = ['eliom', 'enyer', 'vidal']

let nombre = document.getElementById("nombre")
let table = document.getElementById("table")

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", fnSend)

let modificar = false
let index = -1

function fnSend() {
    // save
    if (modificar == true) {
        user[index] = nombre.value

    }
    // send
    if (modificar == false) {
        user.push(nombre.value)
    }
    // update
    fnUpdate()
    // reset input
    nombre.value = ""
    modificar = false

}

function fnDel(e) {
    index = e.target.value

    user.splice(index, 1)
    fnUpdate()
}

function fnEdit(e) {
    index = e.target.value

    nombre.value = user[e.target.value]
    console.log(nombre.value)

    modificar = true

    fnUpdate()
}

function fnUpdate() {

    table.innerText = ""

    for (const [index, value] of user.entries()) {

        let tr = document.createElement("tr")

        let tdValue = document.createElement("td")
        tdValue.textContent = value

        let tdIndex = document.createElement("td")
        tdIndex.textContent = index

        let btnEliminar = document.createElement("button")
        btnEliminar.textContent = "X"
        btnEliminar.value = index
        btnEliminar.addEventListener("click", fnDel)

        let btnEditar = document.createElement("button")
        btnEditar.textContent = "E"
        btnEditar.value = index
        btnEditar.addEventListener("click", fnEdit)

        tr.appendChild(tdIndex)
        tr.appendChild(tdValue)
        tr.appendChild(btnEliminar)
        tr.appendChild(btnEditar)
        table.appendChild(tr)

    }
}

fnUpdate()





