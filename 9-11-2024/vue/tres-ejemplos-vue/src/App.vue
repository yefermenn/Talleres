<template>
    <div id="app">
      <Contador />
      <MostrarOcultar />
      <DetectarMouse />
    </div>
  </template>
  
  <script>
  import Contador from './components/Contador.vue';
  import MostrarOcultar from './components/MostrarOcultar.vue';
  import DetectarMouse from './components/DetectarMouse.vue';
  
  export default {
    name: 'App',
    components: {
      Contador,
      MostrarOcultar,
      DetectarMouse,
    },
  };
  </script>
