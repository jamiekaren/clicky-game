import React from "react";
import "./ImageCard.css";

const ImageCard = props => {





  
  return (
    <div className="card">
      <img
        alt=""
        src={props.src}
        id={props.id}
      />
    </div>
  );
}


export default ImageCard;