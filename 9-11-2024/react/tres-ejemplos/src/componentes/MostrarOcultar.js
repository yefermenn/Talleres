import React, { useState } from 'react';

function MostrarOcultar() {
  const [mostrar, setMostrar] = useState(false); // Inicializa el estado 'mostrar' como false (oculto)

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} Texto
      </button>
      {mostrar && <p>Este es el texto que se muestra u oculta.</p>}
    </div>
  );
}

export default MostrarOcultar;