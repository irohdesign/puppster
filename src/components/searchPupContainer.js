import React, { Component } from "react";
import NavTabs from "./components/NavTabs";
import navbar from "./components/navbar";
import about from "./components/about";
import discover from "./components/discover";
import search from "./components/search";
import APIrandom from "../utils/APIrandom";
import APIsearch from "../utils/APIsearch";

class searchPupContainer extends Component {

    state = {
        searchResult: [],
        randomResult: {},
        search: "" 
    };

    componentDidMount() {
        this.searchPups("corgi");
        this.randomPups("corgi");
    }

    searchPups = query => {
        APIsearch.search(query)
        .then(res => this.setState ({searchResult: res.data}))
        .catch(err => console.log(err));
    };

    randomPups = query => {
        APIrandom.search(query)
        .then(res => this.setState ({randomResult: res.data}))
        .catch(err => console.log(err));
    };

    handleInput

    render()


}