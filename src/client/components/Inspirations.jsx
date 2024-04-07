import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const BrowseEscapes = () => {

  const [ itineraryData, setItineraryData ]= useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
     const{data} = await axios.get('/itinerary')
     setItineraryData(data)
    }
    fetchData();
}, []);
    
    
    //Different image urls according to vibes
    const vibeImages = {
      adventure: ' https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      romantic: 'https://images.pexels.com/photos/4352151/pexels-photo-4352151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      relaxing: 'https://images.unsplash.com/photo-1455906876003-298dd8c44ec8?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'family-friendly': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const options = { month: 'short', day: '2-digit', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };
    const renderItineraries = () => {
      if (itineraryData.length === 0) {
        return <p>Loading...</p>; 
      }
      return itineraryData.map((itinerary)=>{

        const vibeImage = vibeImages[itinerary.vibe] || 'https://placehold.co/10x10';
        console.log(vibeImage);

        const cardStyle = {
          width: '30%',
          margin:'1%'
        }

        return (
            < React.Fragment key={itinerary._id}>
               <Card style={cardStyle}>
                 <Card.Img variant="top" src={vibeImage} style={{height:'500px', width:'auto'}} />
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
                   <ListGroup.Item>{`${formatDate(itinerary.startDate)} ~ ${formatDate(itinerary.endDate)}`}</ListGroup.Item>
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