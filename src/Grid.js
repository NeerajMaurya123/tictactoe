import React from "react";
import "./Grid.css";
const renderValue = (Value) => {
  if (Value === "cross") {
    return "x";
  } else if (Value === "circle") {
    return "o";
  } else {
    return null;
  }
};
const Grid = (props) => {
  return (
    <>
      <div className="container">
        {props.data.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                props.setGrid(index);
              }}
            >
              {renderValue(value)}
            </div>
          );
        })}
      </div>
      <div className="grid-turn">{`turn: ${props.turn}`}</div>
      {props.winner ? (
        <div className="grid-result">{`player with ${
          props.turn === "cross" ? "circle" : "cross"
        } won`}</div>
      ) : null}
      {!props.data.filter((grid) => grid === null).length && !props.winner ? (
        <div className="grid-result">Match draw!!!</div>
      ) : null}
    </>
  );
};
export default Grid;
