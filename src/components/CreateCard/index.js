import React, { Component } from "react";
import "./ImageCard.css";

class Cards extends Component {
    
    //callback, which we send to card container
    onImageClick(image) {
        this.props.onCardClick(image)
    }
    
    render() {
        return (
            <div className="card">
                <img
                    width="250"
                    height="200"
                    alt={this.props.name}
                    src={this.props.src}
                    id={this.props.id}
                    //our event that we send to the card container so we know what image was clicked
                    onClick={(e) => this.onImageClick(this.props.image)}
                />
            </div>
        );
    }
}


export default Cards;