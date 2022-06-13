import {modeloVehiculo}from '../models/modeloVehiculo.js'

export class ServicioVehiculo{

    constructor(){}

    async buscar(){
        let vehiculos=await modeloVehiculo.find()
        return vehiculos
    }

    async buscarPorIdVehiculo(idVehiculo){
        let Vehiculo=await modeloVehiculo.findById(idVehiculo)
        return Vehiculo
    }
    async editar(idVehiculo,datoVehiculo){
        return await modeloVehiculo.findByAndIdUpdate(idVehiculo,datoVehiculo)
    }
    async ingresar(infoVehiculo){
        let vehiculoARegistrar=new modeloVehiculo(infoVehiculo)
        return await vehiculoARegistrar.save()
    }
}