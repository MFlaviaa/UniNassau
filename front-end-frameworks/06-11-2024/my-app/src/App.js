import logo from './logo.svg';
import './App.css';

function App() {
  const nome= 'Flavia'
  const meuNome = nome.toUpperCase()
  return (
    <div className='App'>
      <h1>Alterando React</h1>
      <p>Olá, {nome}</p>
      <p>Olá, {meuNome}</p>
    </div>
  );
}

export default App;
