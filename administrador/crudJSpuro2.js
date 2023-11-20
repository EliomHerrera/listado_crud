let user = [
    { nombre: "enyer", edad: 30 },
    { nombre: "vidal", edad: 31 },
    { nombre: "eliom", edad: 18 },
]

let nombre = document.getElementById("nombre")
let edad = document.getElementById("edad")
let table = document.getElementById("table")

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", fnSend)

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

function fnUpdate() {

    table.innerText = ""

    for (const [index, value] of user.entries()) {

        let tr = document.createElement("tr")

        let tdValue = document.createElement("td")
        let tdValue2 = document.createElement("td")
        tdValue.textContent = value.nombre
        tdValue2.textContent = value.edad

        let tdIndex = document.createElement("td")
        tdIndex.textContent = index

        let btnEliminar = document.createElement("button")
        btnEliminar.textContent = "X"
        btnEliminar.addEventListener("click", () => {
            modificar = false

            user.splice(index, 1)
            fnUpdate()
        })

        let btnEditar = document.createElement("button")
        btnEditar.textContent = "E"
        btnEditar.addEventListener("click", () => {
            modificar = true

            nombre.value = user[index].nombre
            edad.value = user[index].edad
            num = index

            fnUpdate()
        })

        tr.appendChild(tdIndex)
        tr.appendChild(tdValue)
        tr.appendChild(tdValue2)
        tr.appendChild(btnEliminar)
        tr.appendChild(btnEditar)
        table.appendChild(tr)

    }
}

fnUpdate()





