import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import coolcat from '../public/static/coolcat.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.verifyServerConnection()
      .then(res => console.log(res.message))
      .catch(err => console.log(err));
  }


  // API calls
  verifyServerConnection = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }
  post = async (url, data) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }

  render(){
    return(
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Coolio</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Image src={coolcat} fluid />
      </div>
    );
  }
}

export default hot(module)(App);
