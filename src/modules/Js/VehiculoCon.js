import axios from "axios";




//metodos fachada
export const buscarFachada=async()=>{
    return await buscar();
}



//metodos 
const buscar = async () => {
    return axios.get('http://localhost:8081/API/v1.0/Matricula/vehiculos').then(r => r.data)
}