import {modeloAdministrador}from '../models/modeloAdminitrador.js'

export class ServicioAdministrador{

    constructor(){}

    async buscar(){
        let administradores=await modeloAdministrador.find()
        return administradores
    }

    async buscarPorId(idCleda){
        let administrador=await modeloCelda.findById(idAdmin)
        return Administrador
    }
    async editar(idAdmin,datoAdmin){
        return await modeloCelda.findByAndIdUpdate(idAdmin,datoAdmin)
    }
    async ingresar(infoAdmin){
        let administradorARegistrar=new modeloAdministrador(infoAdmin)
        return await administradorARegistrar.save()
    }
}