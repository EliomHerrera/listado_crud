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
        await axios.patch(`${url}/${user[num].id}`, {
            nombre: nombre.value,
            edad: edad.value
        })
    }

    if (modificar == false) {
        await axios.post(url, {
            nombre: nombre.value,
            edad: edad.value
        })

        // setTimeout(() => {
        //     fnUpdate()
        // }, 1000)
    }

    modificar = false
    nombre.value = ""
    edad.value = ""

    fnUpdate()


}

async function fnDel(n) {
    await axios.delete(`${url}/${user[n].id}`)
    modificar = false
    fnUpdate()
}

function fnEdit(n) {
    nombre.value = user[n].nombre
    edad.value = user[n].edad
    num = n
    modificar = true
    // fnUpdate()
}

async function fnUpdate() {
    table.innerText = ""
    user = []
    await axios.get(url).then(res => {
        user = res.data
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