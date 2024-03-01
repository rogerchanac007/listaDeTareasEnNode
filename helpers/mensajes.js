const { stdin, stdout } = require("process");

require("colors");

const mostrarMensaje = ()=>{
    console.clear();
    console.log("========================".green)
    console.log("  Seleccione una opcion".green)
    console.log("========================\n".green)

    console.log(`${"1.".green} Crear una tarea`)
    console.log(`${"2".green}  Listar tareas`)
    console.log(`${"3.".green} Listar tareas completadas`)
    console.log(`${"4.".green} Listar tareas pendientes`)
    console.log(`${"5.".green} Completar tarea(s)`)
    console.log(`${"6.".green} Borrar tarea`)
    console.log(`${"7.".green} Salir\n`)

    const readline = require("readline").Interface({
        input:process.stdin,
        output:process.stdout,
    })
}


module.exports = {
    mostrarMensaje
}
