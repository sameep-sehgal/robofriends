import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/SearchBox';
import Scroll from "../Components/scroll";

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:""
        }
    }


    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users=> {this.setState({robots:users})})
    }
    
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const {robots,searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
    
    return (!robots.length)?
         <h1 className="f1">LOADING...</h1>:
         (
             <div>
                <h1 className="tc f1 pa4 ">ROBOFRIENDS</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList Robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}


export default App;
