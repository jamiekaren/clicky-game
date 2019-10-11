import React from "react";




const CreateCard = props => {
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

export default ImageCard;