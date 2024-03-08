require("colors");

const mostrarMenu = ()=>{
    return new Promise((resolve, reject)=>{
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
        console.log(`${"0.".green} Salir\n`)

        const readline = require("readline").Interface({
            input:process.stdin,
            output:process.stdout,
        })
        
        readline.question("Selecione una opcion o 0 para salir:".blue, (opt)=>{
            readline.close()
            resolve(opt)
        });
    })
}

const pausa = ()=>{
    return new Promise((resolve)=>{
        const readline = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout,
        });
    
        readline.question("Presiona ENTER para continuar".green,(opt)=>{
            readline.close()
            resolve(opt)
        })
    });
}

module.exports = {
    mostrarMenu,
    pausa
}
