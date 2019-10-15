import React, { Component } from "react";
import Cards from "../CreateCard";
import imagesData from "../images.json";
import Wrapper from "../Wrapper";

// before we make our component, we set a variable to clone our object which we call in state
const clone = (x) => Object.assign({}, x);

class CardContainer extends Component {
  state = {
    clicked: 0,
    currentScore: 0,
    highScore: 0,
    imagesData: imagesData.map(clone)
  };

  constructor() {
    super();
  }

  //we got this event from our createcards
  onCardClick(image) {
    //if statement to see what was clicked, we set a boolean
    //if image was already clicked, we currently are just alerting with the image id saying it was clicked already
    if (image.clicked) {
      alert(`Image ${image.id} was already clicked`);
    } else {
      //else if it was not true, we are saying this is the first time clicked and setting it to true
      alert(`First time image ${image.id} was clicked`);
      image.clicked = true;
    }

    //we create a completely new array and set it as our state
    let newImagesData = [...this.state.imagesData];
    //then we can actually reverse our array which is so cool and set it to state
    //but really we need this to change more differently so have to work on that, but at least this is showing it can change
    newImagesData.reverse()
    this.setState({ imagesData: newImagesData })
  }



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