import React from 'react';
import NumWindow from '../NumWindow/NumWindow'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './BigRedButton.css'

const BigRedButton = ({onRoll, num, gameOver, rolling}) => {
  const handleSpace = (e) => {
    if (e.keyCode === 32) {
      onRoll(num);
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="mt-5 mb-3">
            <Button className="btn btn-default btn-circle bigButton shine" onClick={() => onRoll(num)} onKeyDown={handleSpace}>
            <NumWindow num={num} gameOver={gameOver}/>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BigRedButton;