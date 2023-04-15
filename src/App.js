import { Component, Fragment } from "react";
import "./App.css";
import LeftSide from "./UI/LeftSide/LeftSide";
import RightSide from "./UI/RightSide/RightSide";


class App extends Component {
  render() {
    return (
      <Fragment>
        <LeftSide/>
        <RightSide/>
      </Fragment>
    );
  }
}

export default App;