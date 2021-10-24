import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Labsche from './Labsche';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
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
        </header>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/lab-scheduler' component={Labsche}/>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
