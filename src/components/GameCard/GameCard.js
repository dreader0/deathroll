import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './GameCard.css'

const GameCard = ({text, rolling, pastRolls}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} lg={6} className="mt-5">
          <Card className="text-center gameCard">
            <Row className="m-1 tabHeader">
              <Col className="p-1">
                  <h5 className="py-2 rounded prTab rollingIcon">{rolling ? <Spinner animation="border" variant="secondary"/>: text}</h5>
                </Col>
              </Row> 
            <Card.Body className="mb-2 mx-2 pt-2 pastRolls">
              <>{pastRolls.map(pastRoll => (<div className="pastRoll" key={pastRoll}>{pastRoll}</div>))}</>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GameCard; 