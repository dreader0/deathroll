import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TitleBar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5" style={{ color: '#F3F3F3', textShadow: '#000000AA -1px 2px' }}>deathroll</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleBar;