require("colors")
class Tareas{
    
    constructor(){
        this._listado = {}
    }

    get listado(){
        return this._listado
    }

    set listado(lista){
        this._listado = lista;
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

    listarCompleto(){
        let cadena = "";
        this.listar().forEach((tarea, index)=>{
            let indice = `${index + 1}`.green;
            let {_descripcion, completado} = tarea;
            let estado = completado ? "Completado".green : "Pendiente".red;
            cadena += `${indice}.-${_descripcion} ${estado}\n`
        })
        return cadena
    }

    listarPendientesCompletadas(estado="completado"){
        //Funcion que retorna las tareas completadas.
        let cadena = "";
        let tareas = null;
        if (estado == "completado") {
            tareas = this.listar().filter((tarea)=>{
                let {completado, _descripcion} = tarea;
                return completado != null
            })
        }
        else if(estado == "incompleto"){
            tareas = this.listar().filter((tarea)=>{
                let {completado, _descripcion} = tarea;
                return completado == null
            })
        }
        
        tareas.forEach((tarea, index)=>{
            let indice = `${index + 1}`.green;
            let {_descripcion, completado} = tarea;
            let estado = completado ? "Completado".green : "Pendiente".red;
            cadena += `${indice}.-${_descripcion} ${estado}\n`
        })
        return cadena;
    }

    borrarTarea(id=""){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }
}

module.exports = Tareas;