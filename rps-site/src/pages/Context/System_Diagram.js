import React from 'react';

const System_Diagram = () => {
  return (
    <div>
        <h2>System Diagram</h2>
        <div style={{ margin: '0', padding: '0' }}>
          <img src={process.env.PUBLIC_URL + "/images/systemdiagram.png"} alt="System Diagram" style={{ width: '100%', height: 'auto' }} />
        </div>
        <p style={{ whiteSpace: 'pre-line' }}>
            There are two primary phases of the technology for translating EMG inputs into movements in a prosthetic: myoelectric classification and myoelectric control.
        </p>
        <h3>Myoelectric Classification</h3>
        <p>
          To create a model that relates hand movement to EMG data, sensors are placed around the forearm and relevant muscle groups, and test subjects perform specific and repeated hand gestures. After the output from these sensors is filtered to remove noise, the data is segmented into short-timed pulses which are used to calculate features (ex: mean average value, waveform length, zero crossing, and slope sign change) that preserve accuracy while drastically improving efficiency by reducing dimensionality.  These features are then processed through a myoelectric classifier - with the most popular types for EMG data being k-nearest neighbor, latent dirichlet allocation, and artificial neural networks. The classification results/validation metrics are then used to tweak the features selected.
        </p>
        <h3>Myoelectric Control</h3>
        <p>
          To use a prosthetic, an amputee user would attempt to replicate target gestures as if their entire extremity still existed. Similarly to the training setup, sensors would read EEG signals off of their muscles, then filter, segment, and perform feature analysis. Using the trained model from before, features collected from EEG data could be classified into gestures that could be physically recreated using hardware embedded into the prosthetic.
        </p>
    </div>
  );
};

export default System_Diagram;
