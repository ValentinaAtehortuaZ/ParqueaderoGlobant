import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Vehiculo = new Schema({
    placa:{type:String,required:true},
    fechaIngreso:{type:Date,required:false},
    FechaSalida:{type:Date,requiered:false},
    idCelda:{type:String,required:true},
    descripcion:{type:String,required:false},
    totalPago:{type:Number,required:true}
})

export const modeloVehiculo = mongoose.model('vehiculos',Vehiculo)