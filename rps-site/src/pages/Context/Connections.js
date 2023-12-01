import React from 'react';

const Connections = () => {
  return (
    <div>
        <h2>Connecting Back to Rock-Paper-Scissors</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
          While a simple rock-paper-scissors game seems miles away from the development of non-invasive prosthetics, there are many ways projects like this can inform the development of large-scale projects.{'\n'}
          {'\n'}
          Since both applications follow similar initial workflows of data collection, pre-processing, and classification, the metrics that are the most accurate on the rock-paper-scissors game likely carry over to prosthetics. Both applications of EMG identify and isolate signals corresponding to specific muscle activations.
        </p>
        <h3>Feasibility</h3>
        <p style={{ whiteSpace: 'pre-line' }}>
          The RPS classifier only needed to identify three dissimilar gestures. A prosthetic would need to classify, interpret, and act on nerve impulses that correspond to hundreds if not thousands of gestures. Likely, both hardware and software would need a significant level-up. Our live test accuracy (55.6%) shows there is still a lot to be desired. For a prosthetic to be a valuable product, test accuracy would need to skyrocket.{'\n'} 
          {'\n'}
          It should be known, though, that the rock, paper, scissors classifier is an MVP proof of concept. A production classifier would likely be much more reliable.
        </p>
    </div>
  );
};

export default Connections;
