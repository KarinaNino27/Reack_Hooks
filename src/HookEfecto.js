import React, { useState, useEffect } from 'react';

function HookEfecto() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
  
    useEffect(() => {
      document.title =`Carreritas`;
    }, [count2]);
  
    return (
      <div>
        {count1} {count2}
        <br />
        <button onClick={() => setCount1(count1 + 1)}>Avanza No.1</button>
        <button onClick={() => setCount2(count2 + 1)}>Avanza No.2</button>
      </div>
    );
}
export default HookEfecto