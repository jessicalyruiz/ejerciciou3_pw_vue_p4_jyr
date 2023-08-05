<template>
  <h3>Datos</h3>

<table>
    <thead>
        <th>ID</th>
        <th>PLACA</th>
        <th>MODELO</th>
        <th>AÑO</th>
        <th>VALOR</th>
    </thead>
    <tbody :v-for="v in vehiculos ">
        <tr>
        <td>v.id</td>  
        <td>v.placa</td>  
        <td>v.modelo</td>
        <td>v.anio</td>
        <td>v.valor</td>
        </tr>       
    </tbody>

</table>

</template>

<script>
import {buscarFachada} from '../Js/VehiculoCon'
export default {
    data(){
        return{
                vehiculos:null
        }
    },
methods:{
    obtener(){
       const data= buscarFachada();
       this.vehiculos=data;
    }
}
}
</script>

<style>

</style>