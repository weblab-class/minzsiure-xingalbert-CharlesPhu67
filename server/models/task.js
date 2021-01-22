const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskname: String,
  taskid: String,
  tasktype : String ,
  taskduration : Number, 
  creatorid : String , 

  /*4 types : 		id: "task-1",
		name: "Task 1",
		type: "task",
    duration: 15,
    creatorid : user_id */
    
    /*task.find({creatorid: req.userid) .then (res.send(taska))*/
});

// compile model from schema
module.exports = mongoose.model("task", TaskSchema);
