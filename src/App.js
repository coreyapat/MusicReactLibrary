import React, { Component } from 'react';
import axios from 'axios';
import Table from './components/TableBase'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            songs: []
        }
    }
   

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/')
        .then(response => this.setState({
            songs: response.data
        }));
    }



    render(){
        console.log(this.state.songs)
        return(
            <Table songs ={this.state.songs}></Table>
        )
    }
}

export default App
