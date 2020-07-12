import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      isLoaded: false,
      userEmail: "",
      userName: "",
      authenticated: false
    };
  }

  componentDidMount() {
    console.log("component did mount");
  }


  render() {
    return (
      <div className="App">
          {/*Navbar*/}
          <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home" style={{maxWidth: "35%"}}><img alt="logo" src="/trackr_logo.png" className={"float-left"} style={{width: "100%"}}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={"ml-auto"}>
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Coming Soon</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/*Body*/}

      </div>
    );
  }
}

export default App;
