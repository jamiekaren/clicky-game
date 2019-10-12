import React, { Component } from "react";
import Cards from "../CreateCard";
import imagesData from "../images.json";
import Wrapper from "../Wrapper";

class CardContainer extends Component {
  state = {
    images: [],
    clicked: 0,
    currentScore: 0,
    highScore: 0
  };

  // componentDidMount() {
  //   this.createCards();
  // }



  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>
        {imagesData.map(image =>
          <Cards
            src={image.src}
            id={image.id}
          />
        )}
      </Wrapper>
    );
  }
}


export default CardContainer;