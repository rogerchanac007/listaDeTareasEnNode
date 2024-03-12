const {v4:uuidV4} = require("uuid");

class Tarea{
    
    constructor(descripcion){
        this.descripcion = descripcion,
        this.id = uuidV4(),
        this.completado = null
    }
}

module.exports = Tarea;