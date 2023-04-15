import { Component } from "react";

class Img extends Component {
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt}/>
        );
    }
}

export default Img;