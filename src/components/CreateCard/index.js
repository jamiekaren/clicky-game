import React from "react";
import "./ImageCard.css";

const CreateCard = props => {

    return (
        <div className="card">
            <img
                width="200"
                height="150"
                alt={props.name}
                src={props.src}
                id={props.id}
            />
        </div>
    );
}

export default CreateCard;