import { ServicioVehiculo } from '../Services/ServicioVehiculo.js'

class ControladorVehiculo {

    constructor() { }


    async buscar(request, response) {

        let servicioVehiculo = new ServicioVehiculo()

        try {
            response.status(200).json({
                mensaje: 'Exito en la consulta',
                data: await servicioVehiculo.buscar()
            })

        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la consulta' + error,
                data: null
            })

        }

    }

    async buscarVehiculo(request, response) {
        let servicioVehiculo = new ServicioVehiculo()
        try {
            let id = request.params.id
            response.status(200).json({
                mensaje: 'Exito buscando la celda',
                data: await servicioVehiculo.buscarPorId(id)
            })


        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la busqueda' + error,
                data: null
            })
        }
    }

    async editarVehiculo(request, response) {
        let servicioVehiculo = new ServicioVehiculo()
        try {
            let id = request.params.id
            let datos=request.body
            await servicioVehiculo.editar(id,datos) 
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

    async agregarVehiculo(request,response){
        let servicioVehiculo = new ServicioVehiculo()
         
        try{
            let datos= request.body
            await servicioVehiculo.ingresar(datos)
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