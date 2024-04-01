import express from "express";
const day = express.Router();
import Day from "../models/day";

// get all itineraries
day.get ("/", (req, res)=>{
    // res.send("Hello from the day get call.")
    Day.find()
    .then(foundDays => {
      console.log(foundDays)
      res.send(foundDays)
      
    })
    .catch(err=>{console.log(err)})
  })


// get day by id
day.get("/:id", (req,res)=>{

Day.findById(req.params.id)

.then(foundDay => {
    res.send(foundDay)
    })
    .catch(err=>{
    console.log(err)
    res.send(err)})
})
    

  // create a new Day
  day.post("/new", (req,res)=>{

    console.log(req.body)

Day.create(req.body)
.then(newDay =>{
    res.send(newDay)
})
.catch(err=>{
    console.log(err)
    res.send(err)
})
})

//update by id

day.put("/:id", (req, res)=>{
Day.findByIdAndUpdate(req.params.id, req.body, {new:true})
.then(updatedDay=>{
    res.send(updatedDay)
})
.catch(err=>{
    console.log(err)
    res.send(err)
})
})

  //delete an itinerary *will need to create an "are you sure" check before running this on the client side.
day.delete("/:id", (req, res)=>{
  Day.findByIdAndDelete(req.params.id)
  .then(deletedDay=>{
    console.log(deletedDay)
    res.json({message: "deleted the following:", deleted: deletedDay})
  })
  .catch(err=>{
    console.log(err)
    res.send(err)
  })
})


export default day