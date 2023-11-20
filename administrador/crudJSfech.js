let user = []

let url = 'https://q56pxv9r-3000.use2.devtunnels.ms/userData'

let nombre = document.getElementById("nombre")
let edad = document.getElementById("edad")
let table = document.getElementById("table")
let modificar = false
let index = -1
let num = -1

async function fnSend() {
    if (modificar == true) {
        console.log(user[num].id)
        await fetch(`${url}/${user[num].id}`, {
            method: 'PUT',
            body: JSON.stringify({
                nombre: nombre.value,
                edad: edad.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    if (modificar == false) {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre.value,
                edad: edad.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    fnUpdate()

    modificar = false
    nombre.value = ""
    edad.value = ""
}

async function fnDel(n) {
    await fetch(`${url}/${user[n].id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    modificar = false
    fnUpdate()
}

function fnEdit(n) {
    nombre.value = user[n].nombre
    edad.value = user[n].edad
    num = n
    modificar = true

}

async function fnUpdate() {
    table.innerText = ""
    user = []
    await fetch(url)
        .catch(error => console.log(error))
        .then(res => res.json())
        .then(res => {
            user = res
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
            </tr>`
                table.appendChild(tr)
            }
        })
}

fnUpdate()