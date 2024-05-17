import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { SensorContext } from '../context/GlobalState';


const Lcd = ({ label }) => {
  const [lcdMessage, setLcdMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const { lcd, user } = useContext(SensorContext);

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  useEffect(() => {
    if (lcd.length === 0) return;

    const deviceInitial = async () => {
      const messagesData = lcd.messages;
      const message = messagesData[messagesData.length - 1];
      console.log(message);
      setLcdMessage(message);
    };
    deviceInitial();
  }, [lcd]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(newMessage);
      await axios.post(`http://localhost:5000/api/LCD`, { message: newMessage }, {headers: {Authorization: `Bearer ${user.token}`} });
      setLcdMessage(newMessage);
    } catch (error) {
      console.error('Error sending new text:', error);
    }
    setNewMessage('');
  };

  return (
    <Card className={`mb-4 text-center lcd`} style={{ border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor: '#eeeeee', fontFamily: 'Noto Sans'}}>
      <Card.Body>
        <Card.Text
        style={{ fontFamily: 'Noto Sans', fontSize: "20px" }}
        >{lcdMessage}</Card.Text>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col xs={9}>
              <Form.Control
                type="text"
                placeholder="Enter new message"
                value={newMessage}
                onChange={handleInputChange}
                style={{ fontFamily: 'Noto Sans' }}
              />
            </Col>
            <Col xs={3}>
              <Button variant="primary" type="submit" style={{ width: '100%', fontFamily: 'Noto Sans' }}>
                Apply
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Lcd;
