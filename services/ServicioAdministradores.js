import {modeloAdministrador} from '../models/modeloAdministrador.js'

export class ServicioAdministrador{

    constructor(){}

    async buscar(){
        let administradores=await modeloAdministrador.find()
        return administradores
    }

    async buscarPorId(idAdministrador){
        let administrador = await modeloAdministrador.findById(idAdministrador)
        return administrador
    }

    async editar(idAdministrador,datoAdministrador){
        return await modeloAdministrador.findByIdAndUpdate(idAdministrador.datoAdministrador)
    }

    async ingresar(infoAdministrador){
        let administradorARegistrar = new modeloAdministrador(infoAdministrador)
        return await administradorARegistrar.save()
    }
        
}