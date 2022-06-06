import express from 'express'

export let rutas=express.Router()

//Rutas administradores

let administrador = new administrador()

rutas.get('/api/v1/parqueadero/admins/globant', administrador.buscarTodos) //jj
rutas.get('/api/v1/parqueadero/admin/:id/', administrador.buscarPorId)//jhon
rutas.post('/api/v1/parqueadero/admin/',administrador.insertar)
rutas.put('/api/v1/parqueadero/admin/:id/', administrador.editar)//edison


//Rutas celdas

rutas.get('/api/v1/parqueadero/celdas/', administrador.buscarTodos)//yovany
rutas.get('/api/v1/parqueadero/celda/:id/', administrador.buscarPorId)//simon
rutas.post('/api/v1/parqueadero/celda/',administrador.insertar)//jomar
rutas.put('/api/v1/parqueadero/celda/:id/', administrador.editar)//juana

//Rutas vehiculos

rutas.get('/api/v1/parqueadero/vehiculos/', administrador.buscarTodos)//sebas
rutas.get('/api/v1/parqueadero/vehiculo/:id/', administrador.buscarPorId)//mateo
rutas.post('/api/v1/parqueadero/vehiculo/',administrador.insertar)//santiago
rutas.put('/api/v1/parqueadero/vehiculo/:id/', administrador.editar)//lucia