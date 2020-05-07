import React, { Component } from 'react';
import Card_list from "../components/Card_list";
import { robots } from "../robots"
import Search_Bar from "../components/Search_Bar";
import Scroll_View from "../components/Scroll_View";
import {Filter} from "../components/Filter";
import "./App.css";

class App extends Component{
  constructor(){
  super();
  this.state= {
    robots: robots,
    searchText: ''
  }}
  setRobots = (robots) => {
      this.setState({robots: robots})
  }
  textUpdated= (event) => {
    this.setState({searchText: event.target.value});
  }
  render(){
      if(!this.state.robots.length){
        return <h1> Loading.... </h1>
      }
      else{
      const final=this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchText.toLowerCase())
      })
      return(
        <div className="tc">
          <h1 className='f1 heading'> RoboFriends </h1>
            <div className="center">
                <Search_Bar textUpdated={this.textUpdated}/>
                <div className="ml5 search">
                <Filter setRobots={this.setRobots} robots={this.state.robots}/>
                </div>
            </div>
          <Scroll_View>
          <Card_list robots={final}/>
          </Scroll_View>
        </div>
      );
    }
    }
}

export default App;
