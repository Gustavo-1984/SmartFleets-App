import { setVehiculos } from "../vehiculos/vehiculosSlice";
import axios from "axios";

 export const  fetchVehiculos =  () => {
    return async (dispatch, getState) => {
        let res = await axios.get('http://localhost:5000/api/vehiculos')
        dispatch(setVehiculos(res.data))
    }
}
