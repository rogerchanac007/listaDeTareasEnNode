const {inquirerMenu, inquirerPausa, leerInput} = require('./helpers/inquirer');
const Tarea = require('./modules/tarea');
const Tareas = require('./modules/tareas');

const main = async ()=>{
    opt = "";
    var tareas = new Tareas();
    do{
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                let descripcion = await leerInput("Descripcion de la tarea:");
                let tarea = new Tarea(descripcion);
                tareas.nuevaTarea(tarea);
                break;
            case "2":
                console.log(tareas.listado);
                break;
        }
        await inquirerPausa();
    }
    while(opt !=="0")
}

main();

