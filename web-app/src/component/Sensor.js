import Card from 'react-bootstrap/Card';
import SmartIcons from './SmartIcons';


const Sensor = ({ label, device, disabled, value }) => {

  return (
    <Card className={`mb-2 text-center sensor ${value ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
      <Card.Body>
                
      <SmartIcons device={device} active={value} />
        <Card.Title>{value ? 'Motion' : 'No motion'}</Card.Title>
        <Card.Text> {label} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Sensor