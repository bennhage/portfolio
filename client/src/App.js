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
    this.callAPI()
      .then(res => console.log(res.message))
      .catch(err => console.log(err));
  }
  callAPI = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  render(){
    return(
      <div className="App">
        <h1>Lul</h1>
        <button onClick={
            () => {fetch('/api/createproject', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({message: 'hej'})
            })}}>POST</button>
      </div>
    );
  }
}

export default hot(module)(App);
