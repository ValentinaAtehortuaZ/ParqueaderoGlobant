import {modeloCelda}from '../models/modeloCelda.js'


export class ServicioCelda{

    constructor(){}

    async buscar(){
        let celdas=await modeloCelda.find()
        return celdas
    }

    async buscarPorId(idCleda){
        let celda=await modeloCelda.findById(idCleda)
        return celda
    }
    async editar(idCelda,datoCelda){
        return await modeloCelda.findByAndIdUpdate(idCelda,datoCelda)
    }
    async ingresar(infoCelda){
        let celdaARegistrar=new modeloCelda(infoCelda)
        return await celdaARegistrar.save()
    }
}