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
                <button
                    className="btn btn-primary"
                >Yes to all dogs always</button>
            </div>

            <h2>Made friends with 0 pups so far!</h2>
        </div>
    )
}

export default discover;