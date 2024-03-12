const fs = require("fs");

const PATH = "./db/data.json";
const guardarEnDB = (data)=>{
    fs.writeFileSync(PATH, JSON.stringify(data));
}

const leerEnDB = ()=>{
    if(!fs.existsSync(PATH)){
        return null;
    }

    let dataStr = fs.readFileSync(PATH, {encoding:"utf-8"});
    let data = JSON.parse(dataStr);

    return data

}

const convertData = (cadena)=>{
    let data = {};
    cadena.forEach(element => {
        data[element.id] = element
    });
    return data;
}

module.exports = {guardarEnDB, leerEnDB, convertData};