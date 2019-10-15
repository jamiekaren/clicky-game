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

  handleClick = (e) => {
    console.log(e.target);
    
  }


  // I know that I can loop through my Card here to get my images if I pull from my JSON file
  // But I want to render it from STATE, not JSON... how??
  render() {
    return (
      <Wrapper>
        <h1>Clicky Game!</h1>


        <div className="card">
          <img
            width="250"
            height="200"
            alt={imagesData[0].name}
            src={imagesData[0].src}
            id={imagesData[0].id}
            onClick={this.handleClick()}
          />
        </div>
        <div className="card">
          <img
            width="250"
            height="200"
            alt={imagesData[1].name}
            src={imagesData[1].src}
            id={imagesData[1].id}
          />
        </div>
        <div className="card">
          <img
            width="250"
            height="200"
            alt={imagesData[2].name}
            src={imagesData[2].src}
            id={imagesData[2].id}
          />
        </div>
        <div className="card">
          <img
            width="250"
            height="200"
            alt={imagesData[3].name}
            src={imagesData[3].src}
            id={imagesData[3].id}
          />
        </div>
        <div className="card">
          <img
            width="250"
            height="200"
            alt={imagesData[4].name}
            src={imagesData[4].src}
            id={imagesData[4].id}
          />
        </div>
      

      </Wrapper>
    );
  }
}


export default CardContainer;