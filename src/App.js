import React from "react";
import CreateCard from "./components/CreateCard";
import imagesData from "./components/images.json"
import Wrapper from "./components/Wrapper";


function App() {
    return (
        <Wrapper>
            <h1>Clicky Game!</h1>
            {imagesData.map(image =>
                <CreateCard
                    src={image.src}
                    id={image.id}
                />
            )}
        </Wrapper>
    );
}

export default App;