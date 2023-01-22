var timeFormatVariable = "t"

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
let semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"]

const qs = document.querySelector
x = 0
async function recalcular() {
    const time = document.getElementById("time")
    var timestamp = new Date(time.value)
    var tiempo = `t:${Math.floor(timestamp.getTime() / 1000)}:${timeFormatVariable}`
    if (document.getElementById("output").innerHTML !== `&lt;${tiempo}&gt;`) { document.getElementById("output").innerHTML = `<${tiempo}>` }
    var vista = previsualizacion(time.value, timeFormatVariable)
    if (document.getElementById("preview").innerHTML !== `${vista}`) {
        document.getElementById("preview").innerHTML = `${vista}`
    }
}

function start() {
    const time = document.getElementById("time")
    const formato = document.getElementById("formato")
    const now = new Date(Date.now())
    time.value = `${now.getFullYear()}-${now.getMonth() + 1 > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`}-${now.getDate() > 9 ? `${now.getDate()}` : `0${now.getDate()}`}T${now.getHours() > 9 ? now.getHours() : `0${now.getHours()}`}:${now.getMinutes() > 9 ? now.getMinutes() : `0${now.getMinutes()}`}`;
    formato.value = "t";
    formato.addEventListener('change', function () {
        timeFormatVariable = this.options[formato.selectedIndex].value;
    });
    const output = document.getElementById("output")
    output.addEventListener("click", copy)
    setInterval(function () { recalcular() }, 1000)
}

function copy() {
    const content = document.getElementById("output")
    if (content.value == "") return
    content.select();
    document.execCommand("copy");
}