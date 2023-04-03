import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className={`${props.isPressed ? 'btn active ' : 'btn'}`}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
