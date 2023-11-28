import React, { Component } from 'react';
import Titlebar from './components/Titlebar/Titlebar';
import BigRedButton from './components/BigRedButton/BigRedButton';
import GameCard from './components/GameCard/GameCard';
import rules from './ruleLists/rules.json'
import randomRules from './ruleLists/randomRules.json'
import pkg from '../package.json'
import InfoModal from './components/InfoModal/InfoModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

// initial values at the start of the game
const initialState = {
  ruleNum: 9999,                   // number displayed on button
  ruleText: "PRESS THE BUTTON",   // text displayed in Rolled box
  rolling: false,                 // currently rolling (used mostly for delaying text)
  gameOver: false,                // display something different if the game ends
  dupe: 2,                         // keep track of consecutive rolls of the same number
  showModal: false
}

let pastRolls = []

// A list of custom rules set for specific numbers
const rulesList = rules.map((rule) => {
  return rule;
})

// const randomRulesList = randomRules.rules.map((rule) => {
//   return rule;
// })

let randomRulesList = []

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
    // console.log(this.version);
  }

  componentDidMount() {
    this.randomRules = this.mapRandomRules();
    this.version = pkg.version;
    // console.log(this.version)
  }

  mapRandomRules = () => {
    for (let i = 0; i < randomRules.rules.length; i++) {
      let frequency = randomRules.rules[i].frequency;
      // console.log(frequency);
      for (let j = 0; j < frequency; j++) {
        randomRulesList.push(randomRules.rules[i]);
      }
    }
    // console.log(randomRulesList);
  }

  //set the text to display based on the rolled number
  setNewText = (newNum) => {
    var newText = randomRulesList[Math.ceil(Math.random() * (randomRulesList.length - 1))].text
    if (newNum === 1) { // game over
      newText = "YOU LOSE!";
    } else {
      for (var i = 0; i < rulesList.length; i++) {  // loop through custom rules looking for matches
        if (rulesList[i].num === newNum) {
          newText = rulesList[i].text;
        }
      }
    }
    return newText;
  }

  // main game logic, triggered by buttonPress 
  onRoll = (num) => {
    // console.log(rulesList)
    if (num === 1) { // game over, reset state
      this.setState(initialState);
      pastRolls = []
    } else {
      var newNum = Math.ceil(Math.random() * num); // roll a random number
      var newText = this.setNewText(newNum);
      var stateTimeout = 1000 // used to delay text loading (sometimes we don't want a delay)

      // check for duplicate roll and set state accordingly
      if (newNum === num) {
        newText += (" X" + this.state.dupe)
        this.setState({ dupe: (this.state.dupe) + 1 })
        stateTimeout = 0;
      } else {
        this.setState({ dupe: 2 });
      }

      // only update num now if its not 1, otherwise do it later
      var updateNum = {
        rolling: true
      }
      if (newNum !== 1) {
        updateNum.ruleNum = newNum;
      }
      this.setState(updateNum)

      // state update that will be delayed stateTimeout seconds
      var newState = {
        ruleText: newText,
        rolling: false,
      }
      if (newNum === 1) { // 1 means you lose!
        newState.gameOver = true;
        newState.ruleNum = 1;
        if (num === 2) { // don't delay between 2 and 1
          stateTimeout = 0;
        }
      }

      let pastRoll
      if (!(this.state.ruleNum === initialState.ruleNum && this.state.dupe === initialState.dupe)) {
        pastRoll = (this.state.ruleNum + ': ' + this.state.ruleText)
        pastRolls.unshift(pastRoll)
      }

      var self = this;
      setTimeout(function () { self.setRolledRule(newState, pastRoll); }, stateTimeout);
    }
  }

  setRolledRule = (newState, pastRoll) => {

    this.setState(newState);
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { ruleNum, ruleText, rolling, gameOver, showModal } = this.state;
    return (
      <Container className="App">
        <Row>
          <Col><Titlebar /></Col>
        </Row>
        <Row>
          <Col><BigRedButton num={ruleNum} onRoll={this.onRoll} gameOver={gameOver} rolling={rolling} /></Col>
        </Row>
        <Row>
          <Col><GameCard text={ruleText} rolling={rolling} pastRolls={pastRolls} /></Col>
        </Row>
        <Row>
          <Col style={{ cursor: "pointer" }} className="mt-5"><FontAwesomeIcon style={{ fontSize: "2rem" }} icon="info-circle" onClick={this.handleShow} /></Col>
          <InfoModal version={this.version} showModal={showModal} handleClose={this.handleClose} />
        </Row>

        {/* <Row>
          <Col>
            <h4 className="mt-3" style={{ color: '#F3F3F3', textShadow: '#000000AA -1px 2px' }}>v{version}</h4></Col>
        </Row> */}
      </Container>
    );
  }
}

export default App;
