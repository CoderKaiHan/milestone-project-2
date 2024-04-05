import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const BrowseEscapes = () => {

  const [ itineraryData, setItineraryData ]= useState([]);

  useEffect(() => {
    const API_URL = `http://localhost:3000/itinerary/`
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const resData = await response.json();
        setItineraryData(resData);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
}, []);

    const renderItineraries = () => {
      if (itineraryData.length === 0) {
        return <p>Loading...</p>; 
      }
      return itineraryData.map((itinerary)=>{

        const cardStyle = {
          width: '30%',
          margin:'1%'
        }

        return (
            < React.Fragment key={itinerary._id}>
               <Card style={cardStyle}>
                 <Card.Img variant="top" src="https://placehold.co/10x10" />
                 <Card.Body>
                 <Card.Title>
                   <Link to={`/escapes/${itinerary._id}`}>{itinerary.destination}</Link>
                 </Card.Title>
                   <Card.Text>
                     Description data goes here
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   <ListGroup.Item>Vibe: {itinerary.vibe}</ListGroup.Item>
                   <ListGroup.Item>{`${new Date(itinerary.startDate).getFullYear()}-${new Date(itinerary.startDate).getMonth() + 1}-${new Date(itinerary.startDate).getDate()} ~ ${new Date(itinerary.endDate).getFullYear()}-${new Date(itinerary.endDate).getMonth() + 1}-${new Date(itinerary.endDate).getDate()}`}</ListGroup.Item>
                 </ListGroup>
               </Card>
            </React.Fragment>
        );
      });
    }

    const divStyle = {
      display:'flex',
      flexWrap: 'wrap',
      margin:'5%',
      paddingBottom: '5%'
    }

    return (
    <div style={divStyle}>
      {renderItineraries()}
    </div>
    );
}

export default BrowseEscapes;