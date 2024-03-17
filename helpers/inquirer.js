const inquirer = require("inquirer")
require("colors")

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [{
            value: "1",
            name: `${"1.".green}Crear una tarea`
        },
        {
            value: "2",
            name: `${"2. ".green}Listar tareas`
        },
        {
            value: "3",
            name: `${"3. ".green}Listar tareas completadas`
        },
        {
            value: "4",
            name: `${"4. ".green}Listar tareas pendientes`
        },
        {
            value: "5",
            name: `${"5.".green}Completar tareas`
        },
        {
            value: "6",
            name: `${"6.".green}Borrar tarea`
        },
        {
            value: "0",
            name: `${"0.".green}Salir`
        },
        ],

    }
]

const inquirerPausa = async () => {
    await inquirer.prompt({
        type: "input",
        name: "enter",
        message: `Presiona ${"Enter".green} para continuar.`
    })
}

const inquirerMenu = async () => {
    console.clear()
    console.log("========================".green)
    console.log("  Seleccione una opcion".green)
    console.log("========================\n".green)

    const { opcion } = await inquirer.prompt(menuOpt);
    return opcion
}

const leerInput = async (message) => {
    const { descripcion } = await inquirer.prompt([{
        type: "input",
        name: "descripcion",
        message,
        validate: async (entrada) => {
            if (entrada.length == 0) {
                return "Necesitas ingresar un valor"
            }
            return true
        }
    }])
    return descripcion;
}

const listarTareasABorrar = async (tareas = []) => {
    
    const choices = tareas.map((tarea, indice) => {
        indice += 1;
        return {
            value: tarea.id,
            name: `${indice} ${tarea._descripcion}`
        }
    });

    const preguntas = [
        {
            type:"list",
            name:"id",
            message:"Borrar",
            choices
        }
    ]

    const {id} = await inquirer.prompt(preguntas)

    return id
}

const confirmar = async (mensaje)=>{
    preguntas = [
        {
            type:"confirm",
            name:"ok",
            message:mensaje,
        }
    ]
    let {ok} = await inquirer.prompt(preguntas);
    return ok
}  

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    listarTareasABorrar,
    confirmar,
}