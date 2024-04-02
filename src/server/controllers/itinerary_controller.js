import express from "express";
const itinerary = express.Router();
import Itinerary from "../models/itinerary.js"

// get all itineraries
itinerary.get ("/", (req, res)=>{
    // res.send("Hello from the itinerary get call.")
    Itinerary.find()
    .then(foundItineraires => {
      console.log(foundItineraires)
      res.status(200).send(foundItineraires)
      
    })
    .catch(err=>{console.log(err)})
  })


  // get itinerary by id
  itinerary.get("/:id", (req,res)=>{
    
    Itinerary.findById(req.params.id)
    
    .then(foundItinerary => {
        res.status(200).send(foundItinerary)
      })
      .catch(err=>{
        console.log(err)
        res.send(err)})
    })
    

  // create a new itinerary
  itinerary.post("/new", (req,res)=>{

    console.log(req.body)

    Itinerary.create(req.body)
    .then(async (newItinerary)=>{
      await newItinerary.createDaysArray()
      res.status(201).send(newItinerary)
    })
    .catch(err=>{
      console.log(err)
      res.send(err)
    })
  })

  //update by id

  itinerary.put("/:id", (req, res)=>{
    Itinerary.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(updatedItinerary=>{
      res.status(200).send(updatedItinerary)
    })
    .catch(err=>{
      console.log(err)
      res.send(err)
    })
  })

  //delete an itinerary *will need to create an "are you sure" check before running this on the client side.
itinerary.delete("/:id", (req, res)=>{
  Itinerary.findByIdAndDelete(req.params.id)
  .then(deletedItinerary=>{
    console.log(deletedItinerary)
    res.status(200).json({message: "deleted the following:", deleted: deletedItinerary})
  })
  .catch(err=>{
    console.log(err)
    res.send(err)
  })
})


  export default itinerary