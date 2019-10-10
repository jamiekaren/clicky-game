import React, { Component } from "react";

class ImageCard extends Component {
  // setting initial state
  state = {
    imageArray: ["bird", "bunny", "dog", "fox", "hedgehog"],
    userChosen: ""
  };

createImage = () => {

imageArray.map(item => (
  <img alt="" src={item}/>

))


}


render() {
  return (
    <div>
    


    </div>

  );
}


}

export default ImageCard;
