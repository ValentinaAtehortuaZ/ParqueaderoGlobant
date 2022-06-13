
import { ServicioCelda } from '../Services/ServicioCelda.js'

class ControladorCelda {

    constructor() { }


    async buscar(request, response) {

        let serviciosCelda = new ServicioCelda()

        try {
            response.status(200).json({
                mensaje: 'Exito en la consulta',
                data: await serviciosCelda.buscar()
            })

        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la consulta' + error,
                data: null
            })

        }

    }

    async buscarCelda(request, response) {
        let servicioCelda = new ServicioCelda()
        try {
            let id = request.params.id
            response.status(200).json({
                mensaje: 'Exito buscando la celda',
                data: await servicioCelda.buscarPorId(id)
            })


        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la busqueda' + error,
                data: null
            })
        }
    }

    async editarCelda(request, response) {
        let servicioCelda = new ServicioCelda()
        try {
            let id = request.params.id
            let datos=request.body
            await servicioCelda.editar(id,datos) 
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

    async agregarCelda(request,response){
        let servicioCelda = new ServicioCelda()
         
        try{
            let datos= request.body
            await servicioCelda.ingresar(datos)
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