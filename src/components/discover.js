import React from "react";

function discover(props) {
    return (
        <div>
            <h1>Make New Friends</h1>
            <h4>Thumbs up on any pups you're looking to meet.</h4>

            <div className="img-box">
                <img 
                src={props.url}
                
                ></img>
            </div>
        </div>
    )
}

export default discover;