
//import { obtenerTareas, eliminarTarea } from "../../../queries/tareas";
/*
    "titulo":"Titulo de Nota #2",
    "contenido": "Hola a todos como estan? #2",
    "tipo": "pendiente"
    /* 3-100 / 10-500 / 6-20
*/

import { useEffect } from "react";
import { useState } from "react";
import { editarTarea, obtenerTarea } from "../../../queries/tareas";
import { useParams } from "react-router-dom";

const EditarTarea = () => {
    const [state, setState] = useState({titulo:'', tipo:'', contenido:''});
    const {id} = useParams();

    useEffect(()=>{
        obtenerTarea(id).then(res=>{
            setState({titulo:res.titulo, tipo:res.tipo, contenido:res.contenido})
        }).catch(err=>{console.log(err)})
    },[])

    const submitForm = (e)=>{
        e.preventDefault();
        let datos = new FormData(e.currentTarget);
        editarTarea(id, {
            titulo: datos.get('titulo'),
            tipo: datos.get('tipo'),
            contenido: datos.get('contenido')
        })
        .then(res=>{
            if(res.status === 200){
                alert('Modificado con exito');
            }else{
                alert('Error al modificar');
            }
        })
        .catch((err)=>console.log(err))

    }


  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Editar Tarea</h3>
      <div className="d-flex justify-content-center">
        <form onSubmit={(e)=>{submitForm(e);}} className="mb-5">
            <label htmlFor="titulo">Titulo: </label>
            <input className="form-control" type="text" required defaultValue={state.titulo} name="titulo" id="titulo" minLength={3} maxLength={100}/>
            <label htmlFor="tipo">Tipo: </label>
            <input className="form-control" type="text" required defaultValue={state.tipo} name="tipo" id="tipo" minLength={6} maxLength={20}/>
            <label htmlFor="contenido">Contenido: </label>
            <textarea className="form-control" required defaultValue={state.contenido} name="contenido" id="contenido" cols="30" rows="10" minLength={10} maxLength={500}></textarea>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success mt-3">Guardar</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default EditarTarea;
