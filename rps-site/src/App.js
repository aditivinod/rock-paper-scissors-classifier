import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, AppBar, Toolbar, Typography, Tabs, Tab, Container, Popover, List, ListItem, ListItemText } from '@mui/material';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Application from './pages/Context/Application';
import System_Diagram from './pages/Context/System_Diagram';
import Error_Effects  from './pages/Context/Error_Effects';
import Errors_UX from './pages/Context/Errors_UX';
import Connections from './pages/Context/Connections';
import Methods from './pages/Methods/Methods';
import Data_Collection from './pages/Methods/Data_Collection';
import Analysis from './pages/Methods/Analysis';
import Improvement from './pages/Methods/Improvement';
import Final from './pages/Final/Final'
import theme from './theme';
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography /*variant="h6"*/ component={Link} to="/">
              Home
            </Typography>
            <Tabs style={{ marginLeft: '20px' }}>
              <Tab label="About-Us" component={Link} to="/about-us" />
              <HoverableTab
                label="Context"
                menuItems={[
                  {label: "Application", to: "/context/application"},
                  {label: "System Diagram", to: "/context/system_diagram"},
                  {label: "Effects of Errors", to: "/context/error_effects"},
                  {label: "Errors & User Experience", to: "/context/errors_ux"},
                  {label: "Connections to RPS", to: "/context/connections"},
                ]}
              />
              <HoverableTab
                label="Methods"
                menuItems={[
                  {label: "Data Collection", to: "/methods/data_collection"},
                  {label: "Analysis", to: "/methods/analysis"},
                  {label: "Classifier Iteration", to: "/methods/improvement"},
                ]}
              />
              <Tab label="Interpretation" component={Link} to="/final" />
            </Tabs>
          </Toolbar>
        </AppBar>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/context/application" element={<Application />} />
            <Route path="/context/system_diagram" element={<System_Diagram />} />
            <Route path="/context/error_effects" element={<Error_Effects />} />
            <Route path="/context/errors_ux" element={<Errors_UX />} />
            <Route path="/context/connections" element={<Connections />} />
            <Route path="/methods/data_collection" element={<Data_Collection />} />
            <Route path="/methods/analysis" element={<Analysis />} />
            <Route path="/methods/improvement" element={<Improvement />} />
            <Route path="/final" element={<Final />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};



const HoverableTab = ({ label, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setIsHovered(false);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Tab
        label={
          <div>
            {label} {isHovered && '▼'}
          </div>
        }
        onMouseEnter={handleMouseEnter}
        onClick={handleMenuClose}
      />
      <Popover
        open={isHovered}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <List>
          {menuItems.map((menuItem) => (
            <ListItem
              key={menuItem.label}
              button
              component={Link}
              to={menuItem.to}
              onClick={handleMenuClose}
            >
              <ListItemText primary={menuItem.label} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default App;
