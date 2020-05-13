import React from "react";
import "./navbar.css";

// Passing props for image and function that determines if image was clicked before

function Navbar(props) {
    return (
        <div>
            <nav className="navbar fixed-top">
                <h4>Puppy Clicky Game</h4>
                <h4>{props.text}</h4>
                <h4>Score: {props.score} | Top Score {props.highScore}</h4>
            </nav>
        </div>
    );
};

export default Navbar;