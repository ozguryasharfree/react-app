import React from "react";
import { setNumberChange } from "../actions";

const Counter = ({
  count,
  onDecrement,
  onIncrement,
  onSetNumberChange,
  numberSetted,
  onSetNumber,
  timesClicked
}) => {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <br />
        <p>
          Times the increment/decrement buttons have been clicked:{" "}
          {timesClicked}
        </p>
        <input
          type="text"
          onChange={event => onSetNumberChange(event.target.value)}
          value={numberSetted}
        />
        <button onClick={onSetNumber}> Change Count Number</button>
      </div>
    </div>
  );
};

export default Counter;
