import logo from './logo.svg';
import './App.css';
import Contador from './componentes/boton';
import MostrarOcultar from './componentes/MostrarOcultar';
import DetectarMouse from './componentes/DetectarMouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador></Contador>
        <MostrarOcultar></MostrarOcultar>
        <DetectarMouse></DetectarMouse>
      </header>
    </div>
  );
}

export default App;
