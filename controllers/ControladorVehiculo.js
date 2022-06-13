import {ServicioVehiculo} from '../services/ServicioVehiculo.js'

class ControladorVehiculo{

    constructor(){}

    async buscar(request,response){

        let servicioVehiculo = new ServicioVehiculo()

        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioVehiculo.buscar()
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta '+error,
                data:null
            })

        }
    }

    async buscarVehiculo(request,response){

        let servicioVehiculo = new ServicioVehiculo()

        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando el vehiculo ',
                data: await servicioVehiculo.buscarPorId(id)
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos buscando el vehiculo '+error,
                data:null
            })

        }
    }

    async editarVehiculo(request,response){

        let servicioVehiculo = new ServicioVehiculo()

        try{
            let id = request.params.id
            let datos= request.body
            await servicioVehiculo.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando el vehiculo ',
                data:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos editando el vehiculo '+error,
                data:null
            })
        }
    }

    async agregarVehiculo(request,response){

        let servicioVehiculo = new ServicioVehiculo()

        try{
            let datos = request.body
            await servicioVehiculo.ingresar(datos)
            response.status(200).json({
                mensaje:'exito agregando el vehiculo ',
                data:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'falla agregando el vehiculo '+error,
                data:null
            })

        }
    }
}