import React, { Component } from "react";
import navbar from "./components/navbar";
import about from "./components/about";
import discover from "./components/discover";
import search from "./components/search";
import APIsearch from "../utils/APIsearch";

class searchPupContainer extends Component {

    state = {
        searchResult: [],
        search: "" 
    };

    componentDidMount() {
        this.searchPups("corgi");
    }

    searchPups = query => {
        APIsearch.search(query)
        .then(res => this.setState ({searchResult: res.data}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchPups(this.state.search)
    };

    render(){
        return (



        );

    }


}

export default searchPupContainer;