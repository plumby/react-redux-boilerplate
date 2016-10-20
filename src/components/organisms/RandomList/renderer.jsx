import React from 'react';

const renderer = ({randomList,actions}) => {
  return (
    <div>
      Tests....:....
      <div>
        <button onClick={() => actions.addRandomNumber()}>Add</button>
      </div>
      <ul>
        {randomList.map((num,i) => <li key={i}>{num}</li>)}
      </ul>
    </div>
  );
}


export default renderer;
