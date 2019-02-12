import React, { Component } from "react";
import search from "./search";
import SearchRes from "./searchResult.js";
import APIsearch from "../utils/APIsearch";

class searchPupContainer extends Component {

    state = {
        result: [],
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
                <SearchRes
                alt={this.state.result.Title}
                src={this.state.result.img}
                >

                <p>{this.state.result}</p>
                </SearchRes>
            

        );

    }


}

export default searchPupContainer;