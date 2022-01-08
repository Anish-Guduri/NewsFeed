import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import News1 from './components/News1';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <News country="in" apiKey="875311693ad34e95bf094ba88f198ada" pageSize={12} category="technology"/>
        {/* <News1 /> */}
      </div>
    )
  }
}

