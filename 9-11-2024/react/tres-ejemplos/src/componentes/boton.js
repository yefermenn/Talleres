import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0); // inicializa el estado

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
