/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
//const User = require("./models/user");
const Task = require ('./models/task');
const Plan = require ('./models/planschema'); 
// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|
router.get("/plan", (req,res) => { 
  Plan.find({ userId: req.query.userId, name:req.query.name}).then((plan) => res.send(plan)); 
})

router.post("/plan", (req,res) => { 
  const newPlan  = new Plan ({ 
    tasks : req.body.tasks ,
    numTask: req.body.numTask, 
    numBreak: req.body.numBreak, 
    userId: req.body.userId ,
    name: req.body.name,
  })
  const query = {name: req.body.name, userId: req.body.userId}
  Plan.deleteOne(query).then( //ensure only one copy of each plan in database
    newPlan.save().then((plan) => res.send(plan))  
  );
}) 



// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
