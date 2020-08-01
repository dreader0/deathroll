import React from 'react';
import Players from '../Players/Players'
import { Container, Row, Col, Card } from 'react-bootstrap';
import './GameCard.css'

const GameCard = ({tab, onTabChange, pastRolls, playerList, inputName, addName, onNameChange}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} lg={6} className="mt-2">
          <Card className="text-center gameCard">
            <Row className="m-1 tabHeader">
                <Col className="p-1" xs={6} onClick={() => onTabChange("rolls")}>
                  {tab === "rolls" ?
                    <div className="p-1 rounded prTab">past rolls</div> :
                    <div className="p-1">past rolls</div>
                  }
                </Col>
                <Col className="p-1" xs={6} onClick={() => onTabChange("players")}>
                  {tab === "players" ?
                    <div className="p-1 rounded prTab">players</div> :
                    <div className="p-1">players</div>
                  }
                </Col>
              </Row> 
            <Card.Body className="mb-2 mx-2 pt-2 pastRolls">
              {tab === "rolls" ?
                <>{pastRolls.map(pastRoll => (<div className="pastRoll" key={pastRoll}>{pastRoll}</div>))}</> :
                <Players playerList={playerList} inputName={inputName} addName={addName} onNameChange={onNameChange}/>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GameCard;