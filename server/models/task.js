const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task_name: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("task", TaskSchema);
