import './App.css';
import React, { Component } from 'react'
import {Routes, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mode:'dark',
  //   }
  //   console.log(this.state.mode)
  // }
  pageSize=6;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
//   toggleMode() {
//     if (this.state.mode ==='light') {
//       this.setState({
//         mode:'dark',
//       })
//       document.body.style.backgroundColor = '#212529';
//     }
//     else{
//       this.setState({
//         mode:'light'
//       })
//       document.body.style.backgroundColor = 'white'
//     }
//     console.log("toggle mode is clicked"+this.state.mode);
    
// }
  render() {
    return (
      <div>
        <NavBar />
        <LoadingBar color='#1BDFE6' height={2} progress={this.state.progress}/>
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="general"/>} />
        <Route path="/about" element={<About />} />
        <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="business"/>} />
         <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="entertainment"/>} />
         <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="sports"/>} />
         <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="technology"/>} />
         <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="science"/>} />
         <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" country="in" apiKey={this.apiKey} pageSize={this.pageSize} category="health"/>} />
         {/* <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" country="in" apiKey={this.apiKey} pageSize={12} category="general"/>} /> */}
        </Routes>
      </div>
    )
  }
}

