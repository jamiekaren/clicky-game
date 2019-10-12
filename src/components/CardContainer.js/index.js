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


//When component mounts, run the loop images function
  componentDidMount() {
    this.loopImages();
  }


//Loop through JSON data here and create a new array to set the state of **this** component?
//But we def can't do that, because we'd be looping every time, we only want to get JSON once?


  loopImages = () => {
    imagesData.filter(image =>
      this.setState({
        imagesArray: image
      })
    );
  }

  // I know that I can loop through my Card here to get my images if I pull from my JSON file
  // But I want to render it from STATE, not JSON... how??
  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>
        {imagesData.map(image =>
          //Runs my CreateCard "stupid" function, which is pulling in my JSON data to create my images
          <Cards
            src={this.state.imagesArray}
          />
        )}
      </Wrapper>
    );
  }
}


export default CardContainer;