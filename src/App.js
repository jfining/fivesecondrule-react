import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/Home';
import CreateGame from './components/CreateGame'
import JoinGame from './components/JoinGame';
import InGame from './components/InGame';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      gameState: "isHome",
      userName: ""
    };
  }

  GAME_STATES = () => ({
    isHome: <Home setGameState={this.setGameState}></Home>,
    creatingGame: <CreateGame setGameState={this.setGameState}></CreateGame>,
    joiningGame: <JoinGame setGameState={this.setGameState}></JoinGame>,
    inGame: <InGame setGameState={this.setGameState}></InGame>
  })

  setGameState = (gameState) => {
    this.setState({
      gameState: gameState
    });
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return (
      <div className="App">
          {/*Navbar*/}
          <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home" style={{maxWidth: "35%"}}><img alt="logo" src="/favicon.ico" className={"float-left"} style={{width: "100%"}}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={"ml-auto"}>
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Coming Soon</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/*Body*/}
          {this.GAME_STATES()[this.state.gameState]}
      </div>
    );
  }
}

export default App;
