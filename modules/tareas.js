class Tareas{
    
    constructor(){
        this.listado = {}
    }

    nuevaTarea(tarea){
        this.listado[tarea.id] = tarea
    }
}

module.exports = Tareas;