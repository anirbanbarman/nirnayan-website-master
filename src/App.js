
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import TestInfo from './pages/TestInfo';

import Package from './pages/Packages';
import Laboratory from './pages/Laboratory';
import Cart from './pages/Cart';
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <Router>
    <div style={{ width: "100%" }}>

    <ScrollToTop/>

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
          <Route path="/laboratory">
            <Laboratory />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
     








    </div>
    </Router>
  );
}

export default App;
