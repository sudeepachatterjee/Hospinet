const mongoose = require('mongoose');

exports.dbConn = async() => {
    try{
        const dbURL = "mongodb+srv://SachitTarway:Sachit123@cluster0.zub5p1z.mongodb.net/doctordb?retryWrites=true&w=majority"
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database connected`);
    }catch(err){
        console.log(`Database connection error: ${err}`);
    }
}