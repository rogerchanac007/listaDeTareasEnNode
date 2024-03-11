const {inquirerMenu, inquirerPausa} = require('./helpers/inquirer');

const main = async ()=>{
    opt = "";
    do{
        opt = await inquirerMenu();
        await inquirerPausa();
    }
    while(opt !=="0")
}

main();

