
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
  const history = useHistory();
  return (
    <div style={{ width: "100%" }}>

      <Router history={history}>

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
      </Router>








    </div>
  );
}

export default App;
