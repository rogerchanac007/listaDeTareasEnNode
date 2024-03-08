const {mostrarMenu, pausa} = require("./helpers/mensajes")
const {inquirerMenu} = require('./helpers/inquirer');

const main = async ()=>{
    opt = "";
    do{
        opt = await inquirerMenu();
    }
    while(opt !=="0")
}

main();

