import React from "react";
import "./card.css";

// Passing props for image and function that determines if image was clicked before

function Card(props) {
    return (
        <div className="row">
            <div className="col-md-1">
                    <div className="card">
                        <img src={props.image} alt={props.id} onClick={() => props.clickMe(props.id)}></img>
                    </div>

            </div>
        </div>
    );
};

export default Card;