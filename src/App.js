import React from "react";
import ImageCard from "./components/ImageCard";
import imagesData from "./components/images.json"
import Wrapper from "./components/Wrapper";


function App() {
    return (
        <Wrapper>
            <h1>Clicky Game!</h1>
            {imagesData.map(image =>
                <ImageCard
                    src={image.src}
                    id={image.id}
                />
            )}
        </Wrapper>
    );
}

export default App;