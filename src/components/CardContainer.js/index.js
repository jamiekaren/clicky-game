import React, { Component } from "react";
import Cards from "../CreateCard";
import imagesData from "../images.json";
import Wrapper from "../Wrapper";

// before we make our component, we set a variable to clone our object which we call in state running our data through
const clone = (x) => Object.assign({}, x);

class CardContainer extends Component {
  state = {
    clicked: 0,
    currentScore: 0,
    highScore: 0,
    // map through our JSON file currently using our clone object variable, so saving it here instead of in JSON
    imagesData: imagesData.map(clone)
  };

  // constructor() {
  //   super();
  // }

  //we got this event from our createcards
  onCardClick(image) {

    //if statement to see what was clicked, we set a boolean
    //if image was already clicked, we currently are just alerting with the image id saying it was clicked already
    if (image.clicked) {
      alert(`Image ${image.id} was already clicked, game over!`);

      console.log(image);

      if (this.state.currentScore > this.state.highScore) {
        this.setState({ highScore: this.state.currentScore });
        this.setState({ currentScore: 0 });
      } else
        this.setState({ currentScore: 0 });

      let clearClicksData = [...this.state.imagesData];

      clearClicksData.forEach(element => {
        element.clicked = false;
      })

      console.log("New image data hopefully with click");
      console.log(clearClicksData);

      this.setState({ clearClicksData });

    } else {
      //else if it was not true, we are saying this is the first time clicked and setting it to true
      alert(`First time image ${image.id} was clicked, nice!`);

      console.log(image);
      image.clicked = true;
      this.setState({ currentScore: this.state.currentScore + 1 })
    }

    //we create a completely new array from our state, using that fancy new array thing Andrew showed us lol
    // then we reverse it before sending it back to state 
    let newImagesData = [...this.state.imagesData];
    //then we can actually reverse our array which is so cool and set it to state
    //but really we need this to change more differently so have to work on that, but at least this is showing it can change
    // newImagesData.reverse()

    newImagesData.sort(() => Math.random() - 0.5);



    this.setState({ imagesData: newImagesData })
  }


  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>

        <h2>High Score: {this.state.highScore}</h2>
        <h2>Current Score: {this.state.currentScore}</h2>

        {/* We map through our current state data */}
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