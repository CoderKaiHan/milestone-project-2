import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ViewMyEscapes = () => {

  const [ itineraryData, setItineraryData ]= useState([]);
  // const [error, setError] = useState(null);

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

        const handleDelete = (event) => {
          const { destination, value } = event.target;
          setFormData({
            ...formData,
            [destination]: value
          });
        }

        return (
            < React.Fragment key={itinerary._id}>
               <Card style={cardStyle}>
                 <Card.Img variant="top" src="https://placehold.co/10x10" />
                 <Card.Body>
                   <Card.Title><a href=''>{itinerary.destination}</a></Card.Title>
                   <Card.Text>
                     Description data goes here
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   <ListGroup.Item>Vibe: {itinerary.vibe}</ListGroup.Item>
                   <ListGroup.Item>{`${new Date(itinerary.startDate).getFullYear()}-${new Date(itinerary.startDate).getMonth() + 1}-${new Date(itinerary.startDate).getDate()} ~ ${new Date(itinerary.endDate).getFullYear()}-${new Date(itinerary.endDate).getMonth() + 1}-${new Date(itinerary.endDate).getDate()}`}</ListGroup.Item>
                 </ListGroup>
                 <Card.Body>
                   <Button variant="info" style={{margin:'5px'}}>Update</Button>
                   <Button variant="danger" style={{margin:'5px'}}>Delete</Button>
                 </Card.Body>
               </Card>
            </React.Fragment>
        );
      });
    }

    const divStyle = {
      display:'flex',
      flexWrap: 'wrap',
      justifyContent:'space-between',
      margin:'5%',
      paddingBottom: '5%'
    }

    return (
    <div style={divStyle}>
      {renderItineraries()}
    </div>
    );
}

export default ViewMyEscapes;