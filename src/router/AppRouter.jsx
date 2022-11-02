import { Routes, Route } from "react-router-dom"
//import {Login} from "../pages/Login"
import {Inicio} from "../pages"
import {Vehiculos} from "../pages"
import {AgregarVehiculos} from "../pages"
import {EditarVehiculos} from "../pages"
import {Ventas} from "../pages"


export const AppRouter = () => {
    const authStatus = 'not-authenticated'
  return (
   <Routes>
    {/* {
        (authStatus === 'authenticated')
    } */}
        {/* <Route path="/auth/*" element={<Login />} /> */}
        <Route path="/" element={<Inicio />} />
        <Route path="/transacciones" element={<Ventas />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/agregar-vehiculo" element={<AgregarVehiculos />} />
        <Route path="/editar-vehiculo" element={<EditarVehiculos />} />
   </Routes>
  )
}