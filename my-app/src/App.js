import React, { Component } from 'react';
import "./App.css";
import {data} from './components/config/data'
import {List} from './components';


class App extends Component {
  constructor(){
    super();
    this.state={data:data}
  }
  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <List product={data}/>
      </div>
    );
  }
}

export default App;
