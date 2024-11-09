<template>
    <div>
      <button @click="mostrar = !mostrar">
        {{ mostrar ? 'Ocultar' : 'Mostrar' }} Texto
      </button>
      <p v-if="mostrar">Este es el texto que se muestra u oculta.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MostrarOcultar',
    data() {
      return {
        mostrar: false, // Inicialmente el texto está oculto
      };
    },
  };
  </script>