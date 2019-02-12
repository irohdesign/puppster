import React from "react";

function searchResult(props) {
    return(
        <div>
            <img alt={props.Title} src={props.img}></img>
        </div>
    )
}

export default searchResult;