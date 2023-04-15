import { Component } from "react";

class Title2 extends Component {
    render() {
        return(
            <h2 className={this.props.className}>
                {this.props.children}
            </h2>
        );
    }
}

export default Title2;