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
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/lab-scheduler' component={Labsche}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
