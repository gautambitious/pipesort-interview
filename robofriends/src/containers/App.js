import React, { Component } from 'react';
import Card_list from "../components/Card_list";
import { robots } from "../robots"
import Search_Bar from "../components/Search_Bar";
import Scroll_View from "../components/Scroll_View";

class App extends Component{
  constructor(){
  super();
  this.state= {
    robots: [],
    searchText: ''
  }}

  textUpdated= (event) => {
    this.setState({searchText: event.target.value});
  }
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(resp=> this.setState({robots: resp}))
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
        <Search_Bar textUpdated={this.textUpdated}/>
        <Scroll_View>
        <Card_list robots={final}/>
        </Scroll_View>
      </div>
    );
  }}
}

export default App;
