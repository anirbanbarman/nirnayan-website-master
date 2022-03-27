
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import TestInfo from './pages/TestInfo';

import { useHistory } from 'react-router-dom';
import Package from './pages/Packages';


function App() {

  return (
    <Router>
    <div style={{ width: "100%" }}>

 

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test-info">
            <TestInfo />
          </Route>
          <Route path="/packages">
            <Package />
          </Route>
        </Switch>
     








    </div>
    </Router>
  );
}

export default App;
