import React from "react";
import ImageCard from "./components/ImageCard";

const images = [
  {
    id: 1,
    src: "src/components/images/bird.jpg"
  },

  {
    id: 2,
    src: "src/components/images/bunny.jpg"
  },
  {
    id: 3,
  
    src: "src/components/images/dog.jpg"
  },
  {
    id: 4,
    src: "src/components/images/fox.jpg"
  },
  {
    id: 5,
    src: "src/components/images/hedgehog.jpg"
  },
  {
    id: 6,
    src: "src/components/images/horse.jpg"
  }
];

function App() {
  return <ImageCard images={images} />;
}

export default App;