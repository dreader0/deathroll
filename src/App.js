import React, {Component} from 'react';
import Titlebar from './components/Titlebar/Titlebar';
import BigRedButton from './components/BigRedButton/BigRedButton';
import Rolled from './components/Rolled/Rolled';
import GameCard from './components/GameCard/GameCard';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

let playerList = []
// initial values at the start of the game
const initialState = {
  ruleNum: 123,                   // number displayed on button
  ruleText: "PRESS THE BUTTON",   // text displayed in Rolled box
  rolling: false,                 // currently rolling (used mostly for delaying text)
  gameOver: false,                // display something different if the game ends
  dupe: 2,                        // keep track of consecutive rolls of the same number
  tab: "rolls",                   // which tab is selected in the lower card
  inputName: '',
  turn: -1
}

let pastRolls = []

// A list of custom rules set for specific numbers
const rulesList = [{
    num: 69,
    text: "lock arms and drink"
  },{
    num: 420,
    text: "blaze it"
  },{
    num: 17,
    text: "naked mile"
  }
]
 
class App extends Component{
  constructor() {
    super()
    this.state = initialState;
  }

  //set the text to display based on the rolled number
  setNewText = (newNum) => {
    var newText = "drink"
    if (newNum === 1) { // game over
      newText = "YOU LOSE, TAKE A SHOT";
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
      
      // always set ruleNum to the rolled Number and rolling to true
      this.setState({
        ruleNum: newNum,
        rolling: true
      })

      var turn = this.state.turn;
      if (turn > playerList.length - 1) {
        turn = 0
      } else {
        turn++;
      }
      
      // state update that will be delayed stateTimeout seconds
      var newState = {
        ruleText: newText,
        rolling: false,
        turn: turn
      }
      if (newNum === 1) { // 1 means you lose!
        newState.gameOver = true;
        if (num === 2) { // don't delay between 2 and 1
          stateTimeout = 0;
        }
      }
      let pastRoll = (newNum + ': ' + newText)
    
      var self = this;
      setTimeout(function () { self.setRolledRule(newState, pastRoll); }, stateTimeout);
    }
  }

  setRolledRule = (newState, pastRoll) => {
    pastRolls.unshift(pastRoll)
    this.setState(newState);
  }

  onTabChange = (newTab) => {
    if (this.state.tab !== newTab) {
      this.setState({tab: newTab})
    }
  }

  onNameChange = (event) => {
    this.setState({inputName: event.target.value})
  }

  addName = () => {
    if (this.state.inputName !== '') {
      playerList.push(this.state.inputName)
      this.setState({inputName: ''})
    }
  }

  render() {
    const { ruleNum, ruleText, rolling, gameOver, tab, inputName, turn } = this.state;
    return (
      <Container className="App">
        <Row>
          <Col><Titlebar /></Col>
        </Row>
        <Row>
          <Col><BigRedButton num={ruleNum} onRoll={this.onRoll} gameOver={gameOver} playerList={playerList} turn={turn}/></Col>
        </Row>
        <Row>
          <Col><Rolled text={ruleText} rolling={rolling}/></Col>
        </Row>
        <Row>
          <Col><GameCard tab={tab} onTabChange={this.onTabChange} pastRolls={pastRolls} playerList={playerList} inputName={inputName} addName={this.addName} onNameChange={this.onNameChange}/></Col>
        </Row>
        
      </Container>
    );
  }
}

export default App;
