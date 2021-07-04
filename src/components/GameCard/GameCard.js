import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './GameCard.css'

const GameCard = ({text, rolling, pastRolls}) => {
  return (
    <Container>
      <Row style={{"justifyContent": "center"}}>
        <Col lg={6} className="mt-5">
          <h4 className="ruleText p-2">
            {rolling ? <Spinner animation="border" variant="secondary"/>: text}
          </h4>
        </Col>
      </Row>
    </Container>
  );
}

export default GameCard; 