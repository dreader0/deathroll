import React, {Component} from 'react';
// import logo from './logo.svg';
import Titlebar from './components/Titlebar/Titlebar';
import Rolled from './components/Rolled/Rolled';
import BigRedButton from './components/BigRedButton/BigRedButton';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

const initMax = 123;

const initialState = {
  ruleNum: initMax,
  ruleText: "PRESS THE BUTTON",
  rolling: false,
  gameOver: false,
  dupe: 2
}

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

// const randomRulesBank = ["never have i ever", ""]
  
class App extends Component{
  constructor() {
    super()
    this.state = initialState;
  }

  formatValue = (value) => value.toFixed(0);

  setNewText = (newNum) => {
    var newText = "DRINK"
    if (newNum === 1) {
      newText = "YOU LOSE, TAKE A SHOT";
    } else {
      for (var i = 0; i < rulesList.length; i++) {
        if (rulesList[i].num === newNum) {
          newText = rulesList[i].text;
        }
      }
    }
    return newText;
  }

  onRoll = (num) => {
    if (num === 1) {
      this.setState(initialState);
    } else {
      var newNum = Math.ceil(Math.random() * num);
      var newText = this.setNewText(newNum);
      var stateTimeout = 1000
    
    
      if (newNum === num) {
        newText += (" X" + this.state.dupe)
        this.setState({ dupe: (this.state.dupe) + 1 })
        stateTimeout = 0;
      } else {
        this.setState({ dupe: 2 });
      }
    
      this.setState({
        ruleNum: newNum,
        rolling: true
      })

      var newState = {
        ruleText: newText,
        rolling: false,
      }
      if (newNum === 1) { // 1 means you lose!
        newState.gameOver = true;
        if (num === 2) { // don't delay between 2 and 1
          stateTimeout = 0;
        }
      }
    
      var self = this;
      setTimeout(function () { self.setRolledRule(newState); }, stateTimeout);
    }
  }

  setRolledRule = (newState) => {
    this.setState(newState);
  }

  render() {
    const { ruleNum, ruleText, rolling, gameOver } = this.state;
    return (
        <Container className="App">
          <Row>
            <Col><Titlebar /></Col>
          </Row>
          <Row>
          <Col><BigRedButton num={ruleNum} onRoll={this.onRoll} formatValue={this.formatValue} gameOver={gameOver}/></Col>
          </Row>
          <Row>
            <Col><Rolled text={ruleText} rolling={rolling}/></Col>
          </Row>
        </Container>
    );
  }
}

export default App;
