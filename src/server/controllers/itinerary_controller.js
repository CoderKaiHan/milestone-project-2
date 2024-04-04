import express from "express";
const itinerary = express.Router();
import Itinerary from "../models/itinerary.js"
import verifyToken from "../middleware/verifyToken.js";

//NEED TEAM INPUT: We need to determine which routes will be protected, aka which routes require a user to be logged in in order to access. All you have to do to implement this protection is add verifyToken into the paramaters. 
// Ex: router.get ("/itinerary/my-escapes", verifyToken, (req, res) => {
  // we may want to consider refactoring the names of these routes for better flow, ex: "/escapes/my-escapes" "/itineraries/my-itineraries" etc.
  

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
      res.status(200).send(newItinerary)
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