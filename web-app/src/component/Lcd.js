import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';
import { SensorContext } from '../context/GlobalState';

const Lcd = ({ label }) => {
  const [lcdMessage, setLcdMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const { lcd } = useContext(SensorContext);

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
      await axios.post(`http://localhost:5000/api/LCD`, { message: newMessage });
      setLcdMessage(newMessage);
    } catch (error) {
      console.error('Error sending new text:', error);
    }
    setNewMessage('');
  };

  return (
    <Card className={`mb-4 text-center lcd`}>
      <Card.Body>
        <Card.Text>{lcdMessage}</Card.Text>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="lcdMessageInput">
            <Form.Control
              type="text"
              placeholder="Enter new message"
              value={newMessage}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Lcd;
