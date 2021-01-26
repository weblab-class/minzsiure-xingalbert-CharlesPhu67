const mongoose = require("mongoose");
const PlanSchema = new mongoose.Schema({
    tasks : [Object] ,
    numTask: Number, 
    numBreak: Number, 
    userId: String ,
    name : String, 
    planName: String,
  })

module.exports = mongoose.model("plan", PlanSchema);
