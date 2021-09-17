import './App.css';

import Navbar from './Components/Navbar/Navbar';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';

import OrgPrfile from './Components/OrgProfile/OrgProfile';
import Projects from './Components/Projects/Projects';
import AccessControl from './Components/AccessControl/AccessControl';
import Home from './Components/Home/Home';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavigationMenu />
          <Switch>
              <Route exact path="/accesscontrol">
                  <AccessControl />
              </Route>
              <Route exact path="/orgprofile">
                  <OrgPrfile />
              </Route>
              <Route exact path="/projects">
                  <Projects />
              </Route>
              <Route exact path="/">
                  <NavigationMenu />
                  <Home />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
