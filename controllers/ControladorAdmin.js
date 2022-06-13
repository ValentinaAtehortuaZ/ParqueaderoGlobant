

class ControladorAdmin{

    constructor(){}

    async buscarAdmin(){

        let servicioAdmin = new servicioAdmin()
        try{
            response.status(200).json({
                mensaje: 'exito en la busqueda',
                data: await servicioAdmin.buscar()
            })
        }catch(error){
            response.status(400).json({
                mensaje: 'fallamos en la busqueda' + error,
                data: null
            })
        }
    }
}