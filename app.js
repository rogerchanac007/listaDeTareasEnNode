const {inquirerMenu, inquirerPausa, leerInput, listarTareasABorrar, confirmar, confirmCheck} = require('./helpers/inquirer');
const {guardarEnDB, leerEnDB, convertData} = require('./helpers/persistencia');
const Tarea = require('./modules/tarea');
const Tareas = require('./modules/tareas');

const main = async ()=>{
    opt = "";
    var tareas = new Tareas();
    do{
        opt = await inquirerMenu();
        
        data = leerEnDB();

        if(data){
            tareas.listado = convertData(data);
        }
        
        switch (opt) {
            case "1":
                let descripcion = await leerInput("Descripcion de la tarea:");
                let tarea = new Tarea(descripcion);
                tareas.agregar(tarea);
                break;
            case "2":
                console.log(tareas.listarCompleto());
                break;
            case "3":
                console.log(tareas.listarPendientesCompletadas(estado="completado"))
                break;
            case "4":
                console.log(tareas.listarPendientesCompletadas(estado="incompleto"))
                break;
            case "5":
                let ids = await confirmCheck(tareas.listar())
                tareas.toggleCompletadas(ids)
                break;
            case "6":
                let id = await listarTareasABorrar(tareas.listar())
                let confirmacion = await confirmar("¿Estas seguro.?")
                if(confirmacion){
                    tareas.borrarTarea(id);
                    console.log("Tarea borrada.")
                }
                break;
        }

        guardarEnDB(tareas.listar());
        await inquirerPausa();
    }
    while(opt !=="0")
}

main();

