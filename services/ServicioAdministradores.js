import { modeloAdministrador } from '../models/modeloAdministrador.js'

export class ServicioAdministrador {


    constructor() { }

    async buscar() {
        let administradores = await modeloAdministrador.find()
        return administradores

    }

    async buscarPorId(idAdmin) {
        let administrador = await modeloAdministrador.findById(idAdmin)
        return administrador
    }

    async editar(idAdmin, datoAdministrador) {
        return await modeloAdministrador.findByIdAndUpdate(idAdmin.datoAdministrador)
    }

    async ingresar(infoAdministrador) {
        let administradorARegistrar = new modeloVehiculo(infoAdministrador)
        return await administradorARegistrar.save()
    }

}