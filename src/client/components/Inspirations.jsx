import { useState, useEffect } from "react";
import axios from 'axios';

const Inspirations = () => {
  const [inspoItinerary, setInspoItinerary] = useState([])

  useEffect(()=>{
    const getItineraries = async () => {
      const {data} = await axios.get('/itinerary')
      
      setInspoItinerary(data)
    }
    getItineraries()
    
  }, [])
  //days is an array
  const displayInspo = inspoItinerary.map(({id, destination, vibe, days} )=>{
    
    const displayDays = days.map(({id, date, activities})=>{
      
      const displayActivities = activities.map(({id, location})=>(<li key = {id}>location: {location}</li> ))
      // TO DO: location isn't showing for some reason. figure out why.
      return (
        <li key={id}> Day: {date}
          <ul>
            {displayActivities}
          </ul>
        </li>
      )
    })
    return (  <li key ={id}> Destination: {destination}
                <ul>
                  <li>Vibe: {vibe}</li>
                  {displayDays}
                </ul>
              </li> )
  })
  console.log("inspoItinerary useState: ", inspoItinerary)
    return (
        <div style={{height:'80vh'}}>
          <h1>This is the inspiration page</h1>
          <ul>
            {displayInspo}
          </ul>
        </div>
    );
}

export default Inspirations;