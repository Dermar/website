import Logo from 'resources/logo.svg?react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className='App-logo' />
        <p>
          Gonna edit <code>src/App.tsx</code> and save to keep developing this :p
        </p>
        <a
          className="Linkedin-link"
          href="https://www.linkedin.com/in/marian-derias/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
