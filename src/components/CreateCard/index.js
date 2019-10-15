import React from "react";
import "./ImageCard.css";

class Cards extends Component {
    
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
                    onClick={(e) => this.onImageClick(this.props.image)}
                />
            </div>
        );
    }
}


export default Cards;