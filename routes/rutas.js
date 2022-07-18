import express from 'express'

import {ControladorCelda} from '../controllers/ControladorCelda.js'
import {ControladorVehiculo} from '../controllers/ControladorVehiculo.js'
import {ControladorAdministrador} from '../controllers/ControladorAdministrador.js'

let controladorCelda = new ControladorCelda()
let controladorVehiculo = new ControladorVehiculo()
let controladorAdministrador = new ControladorAdministrador()

export let rutas=express.Router()

//Rutas administradores
rutas.get('/api/v1/parqueadero/admins/', controladorAdministrador.buscar)
rutas.get('/api/v1/parqueadero/admin/:id/parking', controladorAdministrador.buscarAdministrador)
rutas.post('/api/v1/parqueadero/admin/',controladorAdministrador.agregarAdministrador)
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