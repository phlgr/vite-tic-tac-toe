import React, { useState } from 'react';

function Square(): JSX.Element {
  const [value, setValue] = useState<string>('');
  return (
    <button onClick={() => setValue('X')} className="square">
      {value}
    </button>
  );
}

export default Square;
