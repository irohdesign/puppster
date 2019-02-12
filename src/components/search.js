import React from "react";

function search(props) {
    return(
        <form>
            <div className="form-group">
                <label>Search:</label>
                <input
                   name="search"
                   type="text"
                   className="form-control"
                   placeholder="Breeds"
                   id="search"
                   onChange={props.handleInputChange}
                   value={props.value}
                >
                </input>
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-primary"
                >Search</button>
            </div>
        </form>
    )
}

export default search;