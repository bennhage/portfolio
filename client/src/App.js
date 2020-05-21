import React, {Component} from 'react';
import {hot} from "react-hot-loader";
import './App.css';

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
        <h1>Lul</h1>
      </div>
    );
  }
}

export default hot(module)(App);
