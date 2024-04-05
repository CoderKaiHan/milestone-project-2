import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function newEscape() {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    vibe: ''
  })

  const handleInput = (event) => {
    const { name, value } = event.target;   
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDate = (e) => {
    const { name, value } = e.target;
    // Formatting the date value to match the format expected by input type="date"
    const formattedDate = new Date(value).toISOString().split('T')[0];
    setFormData({
      ...formData,
      [name]: formattedDate,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit to server here
    console.log(formData);
  };

  return (
    <div className="Create">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="destinationName">
        <Form.Label>Destination</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleInput}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Upload an image for your experience</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <br />
        <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleDate}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleDate}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="endDate">
        <Form.Label>Vibe</Form.Label>
          <Form.Select aria-label="Select a vibe">
            <option>Select one...</option>
            <option value="1">First Option</option>
            <option value="2">Second Option</option>
            <option value="3">Third Option</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default newEscape;