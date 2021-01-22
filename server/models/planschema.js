const mongoose = require("mongoose");
const PlanSchema = new mongoose.Schema({
    tasks : [Object] ,
    numTasks: Number, 
    numBreak: Number, 
    user_id: String ,
    name : String, 
  })

module.exports = mongoose.model("plan", PlanSchema);
