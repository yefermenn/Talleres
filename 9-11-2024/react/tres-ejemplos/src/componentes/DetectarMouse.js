import React, { useState } from 'react';

function DetectarMouse() {
  const manejarMouse = () => {
    alert("Se detectó el evento");
  };

  return (
    <div>
      <p 
        onMouseEnter={manejarMouse}
        style={{ cursor: 'pointer' }}
      >
        Pasa el mouse por encima
      </p>
    </div>
  );
}

export default DetectarMouse;