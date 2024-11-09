<template>
    <div>
      <p>contador: {{ contador }}</p>
      <button @click="aumentarContador">Aumentar</button>
      <button @click="reducirContador">Reducir</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contador',
    data() {
      return {
        contador: 0,
      };
    },
    methods: {
      aumentarContador() {
        this.contador += 1;
      },
      reducirContador() {
        this.contador -= 1;
      },
    },
  };
  </script>