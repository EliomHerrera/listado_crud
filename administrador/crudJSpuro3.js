let user = [
    { nombre: "enyer", edad: 30 },
    { nombre: "vidal", edad: 31 },
    { nombre: "eliom", edad: 18 },
]

let nombre = document.getElementById("nombre")
let edad = document.getElementById("edad")
let table = document.getElementById("table")

let modificar = false

let index = -1
let num = -1

function fnSend() {
    if (modificar == true) {
        user[num].nombre = nombre.value
        user[num].edad = edad.value
    }

    if (modificar == false) {
        user.push(
            {
                nombre: nombre.value,
                edad: edad.value
            }
        )
        console.log(user)
    }

    fnUpdate()

    nombre.value = ""
    edad.value = ""
    modificar = false

}

function fnDel(n) {
    modificar = false

    user.splice(n, 1)
    fnUpdate()
}

function fnEdit(n) {

    nombre.value = user[n].nombre
    edad.value = user[n].edad
    num = n

    modificar = true
    fnUpdate()
}

function fnUpdate() {

    table.innerText = ""

    for (const [index, value] of user.entries()) {

        let tr = document.createElement("tr")

        tr.innerHTML = `
        <tr>
            <td>${index}</td>
            <td>${value.nombre}</td>
            <td>${value.edad}</td>
            <td>
                <button onclick="fnDel(${index})" class="">X</button>
                <button onclick="fnEdit(${index})" class="">E</button>
            </td>
        </tr>
        `

        table.appendChild(tr)

    }
}

fnUpdate()





