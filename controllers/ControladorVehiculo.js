import {ServicioVehiculo} from '../services/ServicioVehiculo.js'
import { ServicioCelda } from '../services/ServicioCelda.js'

export class ControladorVehiculo{

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
        let servicioCelda = new ServicioCelda()

        try{
            let id = request.params.id
            let datos= request.body

            // tengo que obtener los datos de la celda
            let celda = await servicioCelda.buscarPorId(datos.idCelda)

            // voy a capturar la información del valor del minuto de la celda
            let tarifa=celda.tarifa

            // capturlo la fecha de salida
            let fechaSalida = new Date()

            // necesito obtener la fecha de entrada del vehiculo
            let vehiculo = await servicioVehiculo.buscarPorId(id)
            let fechaEntrada =vehiculo.fechaIngreso

            // Restar las 2 fechas y obtener la diferencia de tiempo en minutos
            
            let diferencia=fechaSalida.getTime()-fechaEntrada.getTime()
            let diferenciaEnSegundos=diferencia/1000
            let diferenciaEnMinutos=Math.round(diferenciaEnSegundos/60)
            datos.minutos=diferenciaEnMinutos

            // calculamos el costo del parqueadero
            let costo=diferenciaEnMinutos*tarifa

            // Armo el paquete de datos a actualizar
            datos.fechaSalida=fechaSalida
            datos.totalPago=costo


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
        let servicioCelda = new ServicioCelda()

        try{
            let datos = request.body

            //1. Primero debo obtener los datos de la celda donde voy a ingresar el carro
            let celda = await servicioCelda.buscarPorId(datos.idCelda)

            //2. Preguntar si la celda esta disponible

            if(celda.estado){ // Si la celda está disponible
                // Necesito capturar la fecha de entrada
                let fechaEntrada= new Date()
                // Agregar la fecha de ingreso a los datos del body
                datos.fechaIngreso=fechaEntrada

                await servicioVehiculo.ingresar(datos)
                response.status(200).json({
                mensaje:'exito agregando el vehiculo ',
                data:null
                })

            }

        }catch(error){
            response.status(400).json({
                mensaje:'falla agregando el vehiculo '+error,
                data:null
            })

        }
    }
}