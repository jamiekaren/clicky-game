import React, { Component } from "react";
// import Cards from "../CreateCard";
import imagesData from "../images.json";
import Wrapper from "../Wrapper";


class CardContainer extends Component {
  state = {
    clicked: 0,
    currentScore: 0,
    highScore: 0
  };

  onCardClick(image) {
    if (image.clicked) {
      alert(`Image ${image.id} was already clicked`);
    } else {
      alert(`First time image ${image.id} was clicked`);
      image.clicked = true;
    }

    let newImagesData = [...this.state.imagesData];
    newImagesData.reverse()
    this.setState({ imagesData: newImagesData })
  }


  // I know that I can loop through my Card here to get my images if I pull from my JSON file
  // But I want to render it from STATE, not JSON... how??
  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>

        {this.state.imagesData.map(image =>
          <Cards
            alt=""
            key={image.id}
            src={image.src}
            id={image.id}
            image={image}
            onCardClick={(image) => this.onCardClick(image)}
          />
        )}



      </Wrapper>
    );
  }
}


export default CardContainer;