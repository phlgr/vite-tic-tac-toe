import React from 'react';

function Square(props: { value: number }): JSX.Element {
  return <button className="square">{props.value}</button>;
}

export default Square;
