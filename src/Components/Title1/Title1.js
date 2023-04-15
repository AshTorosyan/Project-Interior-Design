import { Component } from "react";

class Title1 extends Component {
    render() {
        return(
            <h1 className={this.props.className}>
                {this.props.children}
            </h1>
        );
    }
}

export default Title1;