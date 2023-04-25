const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{timestamps: true})

exports.Patient = mongoose.model("Patients",patientSchema);