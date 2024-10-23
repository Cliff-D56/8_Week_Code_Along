const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDb = async()=>{
    try{
        mongoose.connect(db,{})
        console.log("Connected to Clifford Cars Rental MongoDB")
    }catch (err){
        console.log(err.message);
        //Exit process with failure
        process.exit(1)
    }
}

module.exports = connectDb;