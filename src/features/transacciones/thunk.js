import { setVentas } from "../transacciones/ventasSlice";
import axios from "axios";

 export const  fetchVentas =  () => {
    return async (dispatch, getState) => {
        let res = await axios.get('http://localhost:5000/api/ventas')
        dispatch(setVentas(res.data))
        console.log(res.data)
    }
}
