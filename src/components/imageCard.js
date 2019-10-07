import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.selectedImage(props.id)} className="selectedImage">
        <img src={props.image} />
      </div>

    </div>
  );
}

export default FriendCard;