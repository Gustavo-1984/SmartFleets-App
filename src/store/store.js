import { configureStore } from '@reduxjs/toolkit'
import vehiculosReducer from '../features/vehiculos/vehiculosSlice'
import ventasReducer from '../features/transacciones/ventasSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
   reducer:{
    vehiculos: vehiculosReducer,
    ventas: ventasReducer,
    auth: authReducer

    } 
})