import {createSlice} from '@reduxjs/toolkit';

export const vehiculosSlice = createSlice({
    name: 'vehiculos',
    initialState: {
        vehiculos: [],
    },
    reducers: {
        setVehiculos: (state, action) => {
            state.vehiculos = action.payload;
        }

    } 
})
export const {setVehiculos} = vehiculosSlice.actions;
export default vehiculosSlice.reducer
