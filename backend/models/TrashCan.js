const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TruckSchema = new Schema({
    type: { type: String, required: true },
    coordinates: { 
        latitude: { type: {Number}, required: true },
        longitude: { type: {Number}, required: true } 
    }
});


module.exports = mongoose.model("Truck", TruckSchema);