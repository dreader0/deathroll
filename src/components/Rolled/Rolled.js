import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Rolled.css'

const Rolled = ({num, text}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} lg={6} className="mt-4 py-3 rollCard">
          <h5>{num + ' - ' + text}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Rolled;