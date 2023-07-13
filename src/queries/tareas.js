
const URL_tareas = 'http://localhost:4000/api/tareas';
export const obtenerTareas = async()=>{
    try{
        const respuesta = await fetch(URL_tareas);
        const tareas = await respuesta.json();
        return tareas; // voy a retornar un objeto producto.
    }catch(error){
        console.log(error.message)
    }
}

export const eliminarTarea = async(id)=>{
    try{
        const respuesta = await fetch(URL_tareas+'/'+id, {method:'DELETE'});
        if(respuesta.status === 200){
            return true;
        }
        //const tareas = await respuesta.json();
        //return ; // voy a retornar un objeto producto.
        throw new Error("Error al eliminar")
    }catch(error){
        console.log(error.message)
    }
}

export const obtenerTarea = async(id)=>{
    try{
        const respuesta = await fetch(URL_tareas+'/'+id);
        const data = respuesta.json();
        if(respuesta.status === 200){
            return data;
        }
    }catch(error){
        console.log(error.message)
    }
}

export const editarTarea = async(id, obj)=>{
    try{
        const respuesta = await fetch(URL_tareas+'/'+id,
        {method:'PUT', body:JSON.stringify(obj), headers:{'Content-Type':'application/json'}});
        const data = respuesta.json();
        if(respuesta.status === 200){
            return {status:respuesta.status, data};
        }
    }catch(error){
        console.log(error.message)
    }
}

export const crearTarea = async(obj)=>{
    try{
        const respuesta = await fetch(URL_tareas+'/nueva',
        {method:'POST', body:JSON.stringify(obj), headers:{'Content-Type':'application/json'}});
        const data = respuesta.json();
        if(respuesta.status === 200){
            return {status:respuesta.status, data};
        }
    }catch(error){
        console.log(error.message)
    }
}