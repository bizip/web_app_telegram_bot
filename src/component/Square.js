/* eslint-disable react/prop-types */
import React from 'react';

function Square(props) {
  const { value, onClick } = props;
  return (
    <button className="square" type="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
