import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isAfter } from 'date-fns';


const EscapeUpdate = () => {
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Function to handle end date change
    const isSameDate = (date1, date2) => {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }
    
    const handleEndDateChange = (date) => {
        if (!startDate || isAfter(date, startDate) || isSameDate(date, startDate)) {
        setEndDate(date); 
        } else {
          alert('End Date needs to be the same or after the Start Date');
        }
    }

    const divStyle = {
        display:'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        margin:'10%',
        paddingBottom: '5%'
    }

    return (
      <div style={divStyle}>
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Destination
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
            </Form.Group>
       
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Vibe
                </Form.Label>
                <Col sm={10}>
                <Form.Select aria-label="Default select example">
                    <option value="adventure">adventure</option>
                    <option value="romantic">romantic</option>
                    <option value="relaxing">relaxing</option>
                    <option value="family-friendly">family-friendly</option>
                </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Start Date
                </Form.Label>
                <Col sm={10}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Click to select start date"
                  dateFormat="yyyy-MM-dd"
                //   type = "date"
                  minDate={new Date(1900,0,1)}
                  maxDate={new Date(3000,11,31)}
                />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                End Date
                </Form.Label>
                <Col sm={10}>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  placeholderText="Click to select end date"
                  dateFormat="yyyy-MM-dd"
                //   type = "date"
                  minDate={new Date(1900,0,1)}
                  maxDate={new Date(3000,11,31)}
                />
                </Col>
            </Form.Group>
            
            <fieldset>
                <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Radios
                </Form.Label>
                <Col sm={10}>
                    <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    />
                    <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    />
                    <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    />
                </Col>
                </Form.Group>
            </fieldset>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign in</Button>
                </Col>
            </Form.Group>
        </Form>    
      </div>
    )
}

export default EscapeUpdate; 