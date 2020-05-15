import React from "react";
import "./wrapper.css";

// Passing children elements

function Wrapper(props) {
    return (
        <div className="container bg-light">
            <div className="row bg-light">
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;