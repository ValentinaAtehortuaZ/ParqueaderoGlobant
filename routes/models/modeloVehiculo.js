import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Vehiculo = new Schema({
    placa:{
        type:String,
        required:true
    },
    fecha_ingreso:{
        type:Date,
        required:false
    },
        
    fech_salida:{
        type:Date,
        required:false
    },
    id_celda:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    total_pago:{
        type:Number,
        required:true
    }

})

export const modeloAdministrador=mongoose.model('administradores',Admisnistrador)