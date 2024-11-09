<template>
    <div>
      <p @mouseenter="mostrarAlerta" style="cursor: pointer;">
        Pasa el mouse por encima
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DetectarMouse',
    methods: {
      mostrarAlerta() {
        alert('Se detectó el evento');
      },
    },
  };
  </script>