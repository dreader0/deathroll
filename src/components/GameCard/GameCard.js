import React from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './GameCard.css'

const GameCard = ({text, rolling, pastRolls}) => {
  return (
    <Container>
      <Row className="">
        <Col className="mt-5">
          <Card className="gameCard text-center">
            <Card.Body >
              <h4>
                {rolling ? <Spinner animation="border" variant="secondary"/>: text}
              </h4>
              
            </Card.Body>
            
            {/* <Card.Body className="mb-2 mx-2 pt-2 pastRolls">
              <>{pastRolls.map(pastRoll => (<div className="pastRoll" key={pastRoll}>{pastRoll}</div>))}</>
            </Card.Body> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GameCard; 