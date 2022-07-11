
import { ServicioAdministrador } from '../Services/ServicioAdministradores.js'

export class ControladorAdministrador {

    constructor() { }


    async buscar(request, response) {

        let servicioAdministrador = new ServicioAdministrador()

        try {
            response.status(200).json({
                mensaje: 'Exito en la consulta',
                data: await servicioAdministrador.buscar()
            })

        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la consulta' + error,
                data: null
            })

        }

    }

    async buscarAdministrador(request, response) {
        let servicioAdministrador = new ServicioAdministrador()
        try {
            let id = request.params.id
            response.status(200).json({
                mensaje: 'Exito buscando la celda',
                data: await servicioAdministrador.buscarPorId(id)
            })


        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la busqueda' + error,
                data: null
            })
        }
    }

    async editarAdministrador(request, response) {
        let servicioAdministrador = new ServicioAdministrador()
        try {
            let id = request.params.id
            let datos=request.body
            await servicioAdministrador.editar(id,datos) 
            response.status(200).json({
                mensaje: 'Exitos editando la celda' ,
                data: null
            })

        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos editando la celda'+error ,
                data: null
            })
        }

    }

    async agregarAdministrador(request,response){
        let servicioAdministrador = new ServicioAdministrador()
         
        try{
            let datos= request.body
            await servicioAdministrador.ingresar(datos)
            response.status(200).json({
                mensaje:'Exito agregando celda',
                dato:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'falla agregando celda'+error,
                dato:null
            })
        }
    }
}