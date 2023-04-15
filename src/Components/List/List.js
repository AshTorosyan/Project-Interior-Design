import { Component } from "react";

class List extends Component {
    render() {
        return (
            <ol className={this.props.className}>
                {this.props.children}
            </ol>
        );
    }
}


export default List;