import React, { Component } from "react";
import imagesData from "../images.json";
import Wrapper from "../Wrapper/index.js";

class ImageCard extends Component {
  state = {
    images: [],
    clicked: 0,
    currentScore: 0,
    highScore: 0
  };

  componentDidMount() {
    this.createCards();
  }

  createCards = () => {
    imagesData.map(image =>
      
      <img
        alt=""
        src={image.src}
        id={image.id}
      />
    )
  };

  // handleOnClick = () => {



  // }


  render() {
    return (
      <Wrapper>
        
      
        
      </Wrapper>
    );
  }
}


export default ImageCard;