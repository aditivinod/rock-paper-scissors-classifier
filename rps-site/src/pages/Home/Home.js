import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';

const Home = () => {
  const menuItems = [
    { label: 'Context', text: 'Surface EMG for upper body extremity prosthetics', to: '/context/application' },
    { label: 'Methods', text: 'Data collection and algorithm refinement', to: '/methods/data_collection' },
    { label: 'Interpretation', text: 'Final results and next steps',  to: '/final' },
    // Add more menu items as needed
  ];

  return (
    <div>
      <h1>Surface EMG - Rock-Paper-Scissors</h1>
      <p style={{ whiteSpace: 'pre-line' }}> 
        The rock-paper-scissors classifier translates muscle impulses collected using a wireless EMG armband into gesture information. Using a dataset of over 600 gesture samples, a neural-based model was generated, facilitating live classification of rock, paper, and scissors hand gestures.{'\n'}
        {'\n'}
        <a href="https://github.com/aditivinod/rock-paper-scissors-classifier">Source Code</a>
      </p>

      {/* Three Big Buttons */}
      <Grid container spacing={2}>
        {menuItems.map((menuItem, index) => (
          <Grid item key={index} xs={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              style={{
                height: '200px',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }}
              component={Link}
              to={menuItem.to}
            >
              <Typography variant="h5">{menuItem.label}</Typography>
              <Typography variant="body1">{menuItem.text}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
/*import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Neurotech Rock-Paper-Scissors</h1>
      <h2>Aditi Vinod & Ian Walsh</h2>
      <p style={{ whiteSpace: 'pre-line' }}>
        MTH2135 & ENGR3635: Neurotechnology, Brains and Machines{'\n'}
        11/7/2023{'\n'}
      </p>
      <p>The rock-paper-scissors classifier translates muscle impulses collected using a wireless EMG armband into gesture information. Using a dataset of over 600 gesture samples, a neural-based model was generated, facilitating live classification of rock, paper, and scissors hand gestures.
      </p>
    </div>
  );
};

export default Home;*/

