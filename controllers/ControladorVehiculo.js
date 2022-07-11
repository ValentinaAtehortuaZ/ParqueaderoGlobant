import { ServicioVehiculo } from '../Services/ServicioVehiculo.js'
import { ServicioCelda } from '../Services/ServicioCelda.js'

export class ControladorVehiculo {

    constructor() { }


    async buscar(request, response) {

        let servicioVehiculo = new ServicioVehiculo()

        try {
            response.status(200).json({
                mensaje: 'Exito buscando el vehiculo ',
                data: await servicioVehiculo.buscar()
            })

        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la consulta ' + error,
                data: null
            })

        }

    }

    async buscarVehiculo(request, response) {
        let servicioVehiculo = new ServicioVehiculo()
        try {
            let id = request.params.id
            response.status(200).json({
                mensaje: 'Exito buscando el vehiculo ',
                data: await servicioVehiculo.buscarPorId(id)
            })


        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos en la busqueda ' + error,
                data: null
            })
        }
    }

    async editarVehiculo(request, response) {
        let servicioVehiculo = new ServicioVehiculo()
        let servicioCelda = new ServicioCelda()
        try {
            let id = request.params.id
            let datos = request.body
            
            //Obtener los datos de la celda
            let celda = await servicioCelda.buscarPorId(datos.idCelda)

            //Capturar la informacion del valor del minuto de la celda
            let tarifa = celda.tarifa

            // Capturo la fecha de salida
            let fechaSalida = new Date()

            //ObTENER FECHA DE ENTRADA DEL VEHICULO
            let vehiculo = await servicioVehiculo.buscarPorId(id)
            let fechaEntrada = vehiculo.fechaIngreso

            //Restar las dos fechas y obtener la diferencia de tiempo en minutos

            let diferencia=fechaSalida.getTime() - fechaEntrada.getTime()
            let diferenciaEnSegundos=diferencia/1000
            let diferenciaEnMinutos=diferenciaEnSegundos/60

            //Calculasmos costo de parqueadero

            let costo=diferenciaEnMinutos*tarifa

            //Armo el paquete de datos a actualizar
            datos.fechaSalida=fechaSalida
            datos.totalPago=costo


            await servicioVehiculo.editar(id, datos)
            response.status(200).json({
                mensaje: 'Exitos editando el vehiculo ',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                mensaje: 'Fallamos editando el vehiculo ' + error,
                data: null
            })
        }

    }

    async agregarVehiculo(request, response) {
        let servicioVehiculo = new ServicioVehiculo()
        let servicioCelda = new ServicioCelda()

        try {
            let datos = request.body

            //1. Obtener datos de la celda donde voy a ingresar el carro

            let celda = await servicioCelda.buscarPorId(datos.idCelda)

            //2. Pregunatar si la celda esta disponible

            if (celda.estado) {//si la celda esta disponible
                //Capturar fecha de entrada

                let fechaEntrada = new Date()
                //Agregar fecha de entrada a los datos del body
                datos.fechaIngreso = fechaEntrada

                await servicioVehiculo.ingresar(datos)
                response.status(200).json({
                    mensaje: 'Exito agregando el vehiculo ',
                    dato: null
                })
            }



        } catch (error) {
            response.status(400).json({
                mensaje: 'falla agregando el vehiculo ' + error,
                dato: null
            })
        }
    }
}