import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function ImageCard(props) {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
   return (
    <div>
      {props.images.map(item => (
        <img alt={props.id} src={item.src}/>     
      ))}
    </div>
  );
}

export default ImageCard;