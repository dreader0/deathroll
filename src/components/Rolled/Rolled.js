import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Rolled.css'

const Rolled = ({num, text}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} lg={6}>
          <Card className="mt-4 py-2 rollCard">
            <h5>{num + ' - ' + text}</h5>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Rolled;