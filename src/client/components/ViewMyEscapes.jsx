import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';


const ViewMyEscapes = () => {

  const [ itineraryData, setItineraryData ]= useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  useEffect(() => {
    const API_URL = `import.meta.env.VITE_API_URL`
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
    
    const confirmDelete = async (itineraryId) => {
      const API_URL = import.meta.env.VITE_API_URL
      try {
        await axios.delete(`${API_URL}/itinerary/${itineraryId}`)
          console.log(`Deleted itinerary with ID ${itineraryId}`);
          const response = await fetch(`${API_URL}/itinerary/`);
          const resData = await response.json();
          setItineraryData(resData);
          setModalShow(false);
      } catch (error){
          console.error(error);
        }
    }    

    const renderItineraries = () => {
      if (itineraryData.length === 0) {
        return <p>Loading...</p>; 
      }
      return itineraryData.map((itinerary)=>{

        const cardStyle = {
          width: '30%',
          margin:'1%'
        }

        const handleDelete = (itinerary) => {
          setSelectedItinerary(itinerary);
          setModalShow(true);
        };

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
                 <Card.Body>
                   <Button variant="info" style={{margin:'5px'}} href={`/escapes/${itinerary._id}/update`}>Update</Button>
                   <Button variant="danger" style={{margin:'5px'}} onClick= {()=> handleDelete(itinerary)}>Delete</Button>
                 </Card.Body>
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
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {selectedItinerary && selectedItinerary.destination}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Delete this itinerary ?</h4>
          <p>
            This itinerary can't be recovered after the deletion. Click confirm
            to delete. Close the conversation to cancel.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setModalShow(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {confirmDelete(selectedItinerary._id); setModalShow(false)}}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}

export default ViewMyEscapes;