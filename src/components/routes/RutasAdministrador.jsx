import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import Tareas from "../views/tareas/Tareas";
import EditarTarea from "../views/tareas/EditarTarea";
import CrearTarea from "../views/tareas/CrearTarea";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear-producto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/tareas"
          element={<Tareas/>}
        ></Route>
        <Route
          exact
          path="/tareas/editar/:id"
          element={<EditarTarea/>}
        ></Route>
        <Route
          exact
          path="/tareas/nueva"
          element={<CrearTarea/>}
        ></Route>
        <Route
          exact
          path="/editar-producto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
