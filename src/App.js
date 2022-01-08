import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <News country="in" apiKey="458d646dfb1645bd955e78cd12bb3f52" pageSize={12} category="science"  />
      </div>
    )
  }
}

