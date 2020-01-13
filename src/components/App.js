import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  setNumber,
  setNumberChange
} from "../actions/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          onIncrement={this.props.onIncrement}
          timesClicked={this.props.timesClicked}
          onDecrement={this.props.onDecrement}
          onSetNumber={this.props.onSetNumber}
          onSetNumberChange={this.props.onSetNumberChange}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onSetNumber: () => dispatch(setNumber()),
    onSetNumberChange: number => dispatch(setNumberChange(number))
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    timesClicked: state.timesClicked,
    numberSetted: state.numberSetted
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
