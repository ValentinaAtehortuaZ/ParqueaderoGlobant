import express from 'express'

import {ControladorAdministrador} from '../controllers/ControladorAdministrador.js'
import {ControladorCelda} from '../controllers/ControladorCelda.js'
import {ControladorVehiculo} from '../controllers/ControladorVehiculo.js'

let controladorAdministrador = new ControladorAdministrador()
let controladorCelda = new ControladorCelda()
let controladorVehiculo = new ControladorVehiculo()

export let rutas=express.Router()

//Rutas administradores



rutas.get('/api/v1/parqueadero/admins/', controladorAdministrador.buscar)
rutas.get('/api/v1/parqueadero/admin/:id/', controladorAdministrador.buscarAdministrador)
rutas.post('/api/v1/parqueadero/admin/globantValen',controladorAdministrador.agregarAdministrador)
rutas.put('/api/v1/parqueadero/admin/:id/', controladorAdministrador.editarAdministrador)


//Rutas celdas

rutas.get('/api/v1/parqueadero/celdas/', controladorCelda.buscar)
rutas.get('/api/v1/parqueadero/celda/:id/', controladorCelda.buscarCelda)
rutas.post('/api/v1/parqueadero/celda/',controladorCelda.agregarCelda)
rutas.put('/api/v1/parqueadero/celda/:id/', controladorCelda.editarCelda)

//Rutas vehiculos

rutas.get('/api/v1/parqueadero/vehiculos/', controladorVehiculo.buscar)
rutas.get('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.buscarVehiculo)
rutas.post('/api/v1/parqueadero/vehiculo/',controladorVehiculo.agregarVehiculo)
rutas.put('/api/v1/parqueadero/vehiculo/:id/', controladorVehiculo.editarVehiculo)