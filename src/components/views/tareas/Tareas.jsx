
//import { Button, Form } from "react-bootstrap";

import { useEffect, useState } from "react";
import { obtenerTareas, eliminarTarea } from "../../../queries/tareas";
import { Link } from "react-router-dom";

/*
"titulo":"Titulo de Nota #2",
    "contenido": "Hola a todos como estan? #2",
    "tipo": "pendiente"

*/

const Tareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(()=>{
    obtenerTareas()
    .then(res=>{setTareas(res);})
    .catch((err)=>console.log(err))
  },[])


  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Tareas <Link className="btn btn-sm btn-success" to={'/tareas/nueva'}>Nueva Tarea</Link></h3>
      <div className="d-flex justify-content-center">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#N TAREA</th>
                <th>TITULO</th>
                <th>CONTENIDO</th>
                <th>TIPO</th>
                <th>ACCION</th>
              </tr>
            </thead>
            <tbody>
              {
                tareas.length < 0 ? 
                <tr><td><b>Sin tareas</b></td></tr> :
                tareas.map((t,i)=>{
                  return (<tr key={i}>
                    <td>#{i}</td>
                    <td>{t.titulo}</td>
                    <td>{t.contenido}</td>
                    <td>{t.tipo}</td>
                    <td>
                      <button className="btn btn-sm bg-danger mx-1 text-white" onClick={()=>{
                        eliminarTarea(t._id).then(res=>{ res === true && setTareas(tareas.filter((tar)=>tar._id != t._id))})
                      }}>DEL</button>
                      <Link className="btn btn-sm bg-warning mx-1 text-white" to={'/tareas/editar/'+t._id}>EDIT</Link>
                    </td>
                  </tr>)
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tareas;
