import React, { Component } from "react";
import Navbar from "./components/navbar";
import about from "./components/about";
import discover from "./components/discover";
import search from "./components/search";
import APIrandom from "../utils/APIrandom";


class randoPupContainer extends Component {

    state = {
           randomResult: {},
        search: "" 
    };

    componentDidMount() {
         this.randomPups("corgi");
    }

    randomPups = query => {
        APIrandom.search(query)
        .then(res => this.setState ({randomResult: res.data}))
        .catch(err => console.log(err));
    };

   handleButtonSubmit = event => {
       event.preventDefault();
       this.randomPups(this.state.search);
   }
 
    render(){
        return
        <div>
            <discover> 
            handleButtonSubmit = {this.handleButtonSubmit};
            </discover>
        </div>
    }


}

export default randoPupContainer;