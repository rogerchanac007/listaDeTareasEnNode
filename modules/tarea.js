const {v4:uuidV4} = require("uuid");

class Tarea{
    
    constructor(valor){
        this._descripcion = valor,
        this.id = uuidV4(),
        this.completado = null
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(valor){
        this._descripcion = valor;
    }
}

module.exports = Tarea;