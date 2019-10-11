import React, { Component } from "react";
import imagesData from "./components/images.json"
import Wrapper from "../Wrapper/index.js";

class ImageCard extends React {
  state = {
    images: [],
    clicked: 0,
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


  render() {
    return (
      <Wrapper>


        
      </Wrapper>
    );
  }
}


export default ImageCard;