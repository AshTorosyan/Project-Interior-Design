import { Component } from "react";

class TextItem extends Component {
    render() {
        return (
            <p className={this.props.className}>
                {this.props.children}
            </p>
        );
    }
}

export default TextItem;