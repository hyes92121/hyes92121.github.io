import tera from './tera.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={tera} className="App-logo" alt="logo" />
        <p>
          Hello World. This is Caleb's first official website!! 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
