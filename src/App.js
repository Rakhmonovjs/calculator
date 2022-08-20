import './App.css';
import Calculator from './components/Calculator';
import Particle from './components/Particle';

function App() {
  return (
    <div className="App">
      <h1 className="nom">  Calculator </h1>
      <Particle />

      <Calculator />
    </div>
  );
}

export default App;
