import React from "react";
import "./style.css";
import Images from "../images";

function ImageCard(props) {

const imageArray = [bird, bunny, dog,fox, hedgehog, horse, kangaroo, kitten, lemur, owl, racoon];

let buildImages = array.map(imageArray => {
  return <img key={image} src={require('.images/${image}.jpg')} className="img-responsive" id={image}>
});

  return (
    <div className="card">
      <div className="img-container" onClick={() => props.selectedImage(props.id)} className="selectedImage">
       
      {buildImages}


      </div>

    </div>
  );
}

export default ImageCard;