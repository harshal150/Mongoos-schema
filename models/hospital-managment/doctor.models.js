const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        sallery : {
            type : Number,
            required : true
        },
        qualifications  :{
            type : String , 
            required : true
        },
        experienceInYear :{
            type : Number,
            default : 0
        },
        worksInHospitals : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Hospital"
        }
    },{ timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema);

