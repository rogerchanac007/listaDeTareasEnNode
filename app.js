const {inquirerMenu, inquirerPausa, leerInput} = require('./helpers/inquirer');
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
                console.log(tareas.listado);
                break;
        }

        guardarEnDB(tareas.listar());
        await inquirerPausa();
    }
    while(opt !=="0")
}

main();

