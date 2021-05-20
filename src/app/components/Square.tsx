import React, { useState } from 'react';

type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square(props: SquareProps): JSX.Element {
  return (
    <button onClick={() => props.onClick()} className="square">
      {props.value}
    </button>
  );
}

export default Square;
