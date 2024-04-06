import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function activities() {
  const [ itineraryData, setItineraryData ]= useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_URL = `http://localhost:3000/itinerary/`
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const resData = await response.json();
        setItineraryData(resData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
}, []);

const renderItineraries = () => {
  return itineraryData.map((itinerary, itineraryIndex) => {
   const dateRange = itinerary.days.date;
    return (
      <div className="Create" key={itineraryIndex}>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">
                  {dateRange.map((date, index) => (
                    <span key={index}>{date.toLocaleDateString()}</span>
                  ))}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>
              Descriptions of activities
            </Card.Text>
            <Button variant="primary">Save</Button>
          </Card.Body>
        </Card>
      </div>
    )
  })
}
}

export default activities;