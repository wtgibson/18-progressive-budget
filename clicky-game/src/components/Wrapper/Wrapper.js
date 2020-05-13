import React from "react";
import "./wrapper.css";

// Passing children elements

function Wrapper(props) {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;