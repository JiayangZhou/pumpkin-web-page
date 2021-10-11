import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ 
                color: 'white', 
                backgroundColor: '#f0823d',
                borderRadius: '8px' 
                }}>
          Welcome to our front page
          - Yuning, Leilei, Jiayang
        </p>
        <a
          className="App-link"
          href="https://github.com/JiayangZhou"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact us
        </a>
      </header>
      

    </div>
  );
}

export default App;
