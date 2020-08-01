import React from 'react';
import NumWindow from '../NumWindow/NumWindow'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './BigRedButton.css'

const BigRedButton = ({onRoll, num, gameOver, playerList, turn}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="mt-4">
            <Button className="btn btn-default btn-circle bigButton" onClick={() => onRoll(num)}>
            <NumWindow num={num} gameOver={gameOver} playerList={playerList} turn={turn}/>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BigRedButton;