import React, { useState } from 'react';


function HookEstado() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>La Calificación es: {count} </p>
      <button onClick={() => setCount(count + 1)}>
      Subir Calificación
      </button>
      <button onClick={() => setCount(count - 1)}>
      Bajar Calificación
      </button>
    </div>
  );
}

export default HookEstado;