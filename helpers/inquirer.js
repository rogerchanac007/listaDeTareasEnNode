const inquirer = require("inquirer")

const menuOpt = [
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer?',
        choices:[{
            value:"1",
            name:"1. Crear una tarea"
        },
        {
            value:"2",
            name:"2. Listar tareas"
        },
        {
            value:"3",
            name:"3. Listar tareas completadas"
        },
        {
            value:"4",
            name:"4. Listar tareas pendientes"
        },
        {
            value:"5",  
            name:"5. Completar tareas"
        },
        {
            value:"6",
            name:"6. Borrar tarea"
        },
        {
            value:"0",
            name:"0. Salir"
        },
    ],

    }
]

const inquirerMenu = async ()=>{
    console.clear()
    console.log("========================".green)
    console.log("  Seleccione una opcion".green)
    console.log("========================\n".green)

    const {opcion} = await inquirer.prompt(menuOpt);
    return opcion
}

module.exports = {
    inquirerMenu
}