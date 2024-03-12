class Tareas{
    
    constructor(){
        this._listado = {}
    }

    agregar(tarea){
        this._listado[tarea.id] = tarea
    }

    listar(){
        let listaDeTareas = [];
        Object.keys(this._listado).forEach(key=>{
            let tarea = this._listado[key];
            listaDeTareas.push(tarea);
        });
        return listaDeTareas;
    }
}

module.exports = Tareas;