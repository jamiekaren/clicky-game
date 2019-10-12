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

  // componentDidMount() {
  //   this.createCards();
  // }

  loopImages = () => {
    imagesData.filter(image => 
      this.setState({imagesArray: image} )
      )
  }


  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>
        {imagesData.map(image =>
          <Cards
            src={this.state.imagesArray}
          />
        )}
      </Wrapper>
    );
  }
}


export default CardContainer;