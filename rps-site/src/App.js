// src/App.js
import React, { useState } from 'react';
import { Tabs, Tab, Container } from '@mui/material';
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/Home/Home'
import Context from './pages/Context/Context'
import "./App.css";


const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Context" />
        <Tab label="Methods" />
        <Tab label="Final Results" />
      </Tabs>

      {value === 0 && <Home />}
      {value === 1 && <AboutUs />}
      {value === 2 && <Context />}
    </Container>
  );
};

export default App;


/**import logo from './logo.svg';
import { useState } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { AboutUs, Home } from "./pages";  
import "./App.css";

/**function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}*/

/**function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newTab) => {
    setTabValue(newTab);
  };

  return (
    <div className="App">
      <Typography style={{ marginTop: "20px", fontSize: "30px" }}>
        Neurotech 2023 RPS
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Home" />
        <Tab label="About Us" />
      </Tabs>

      {tabValue === 0 && <Home />}
      {tabValue === 1 && <AboutUs />}
    </div>
  );
}

export default App;*/


/**import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">AboutUs</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;*/
