import React, { Component } from "react";
import Cards from "../CreateCard";
import imagesData from "../images.json";
import Wrapper from "../Wrapper";


class CardContainer extends Component {
  state = {
    imagesArray: [],
    clicked: 0,
    currentScore: 0,
    highScore: 0
  };




  // shuffleImages = () => {

  // }

  // I know that I can loop through my Card here to get my images if I pull from my JSON file
  // But I want to render it from STATE, not JSON... how??
  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>
  
        {imagesData.map(image =>
          <Cards 
            alt=""
            key={image.id}
            src={image.src}
            id={image.id}
          />
        )}


   
      </Wrapper>
    );
  }
}


export default CardContainer;