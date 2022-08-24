
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from './components/Login';



function App() {
  return (
    
     
      <Router>
        <div className="App">
      <Header/>
      <Home />
      <Switch>
      <Route exact path="/login">
            <Login />
          </Route>
         
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
        </div>
    </Router>
    
  
  );
}

export default App;
