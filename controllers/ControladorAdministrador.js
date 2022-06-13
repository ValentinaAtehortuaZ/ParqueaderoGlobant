import {ServicioAdministrador} from '../services/ServicioAdministradores'

class ControladorAdministrador{

    constructor(){}

    async buscar(request,response){

        let servicioAdministrador = new ServicioAdministrador()

        try{
            response.status(200).json({
                mensaje:'exito en la consulta',
                data: await servicioAdministrador.buscar()
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en la consulta'+error,
                data:null
            })

        }
    }

    async buscarAdministrador(request,response){

        let servicioAdministrador = new ServicioAdministrador()

        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando el administrador ',
                data: await servicioAdministrador.buscarPorId(id)
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos buscando el administrador '+error,
                data:null
            })

        }
    }

    async editarAdministrador(request,response){

        let servicioAdministrador = new ServicioAdministrador()

        try{
            let id = request.params.id
            let datos= request.body
            await servicioAdministrador.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando el administrador ',
                data:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallamos editando el administrador '+error,
                data:null
            })
        }
    }

    async agregarAdministrador(request,response){

        let servicioAdministrador = new ServicioAdministrador()

        try{
            let datos = request.body
            await servicioAdministrador.ingresar(datos)
            response.status(200).json({
                mensaje:'exito agregando administrador ',
                data:null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'falla agregando administrador '+error,
                data:null
            })

        }
    }
} 