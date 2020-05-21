import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { hot } from 'react-hot-loader';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

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
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Coolio</Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link href="#projects">Projects</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <Navbar bg="dark" variant="dark" fixed="bottom">
            <Navbar.Text>
              <a href="https://github.com/bennhage">GitHub</a>
            </Navbar.Text>
          </Navbar>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
function Home() {
  return <h2>Home</h2>;
}
function Projects() {
  return <h2>Projects</h2>
}
export default hot(module)(App);
