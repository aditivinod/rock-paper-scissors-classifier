import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Neurotech RPS Report</h1>
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

export default Home;

