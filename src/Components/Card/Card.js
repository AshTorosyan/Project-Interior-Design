import { Component } from "react";

class Card extends Component {
    render() {
        return (
            <section className={this.props.className}>
                {this.props.children}
            </section>
        );
    }
}

export default Card;