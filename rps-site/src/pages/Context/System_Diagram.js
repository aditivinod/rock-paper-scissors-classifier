import React from 'react';

const System_Diagram = () => {
  return (
    <div>
        <h2>System Diagram</h2>
        <div style={{ margin: '0', padding: '0' }}>
          <img src="/images/systemdiagram.png" alt="System Diagram" style={{ width: '75%', height: 'auto' }} />
        </div>
        <p style={{ whiteSpace: 'pre-line' }}>
            There are two primary phases of the technology for translating EMG inputs into movements in a prosthetic: myoelectric classification and myoelectric control.{'\n'}
            {'\n'}
            EMG input data is collected from specific hand movements made with sensors around the forearm and primary muscles recording information. After a significant amount of pre-processing to try to limit excess noise, the data is segmented into various time windows - through both overlapping and individual models. The segmented data is then used to calculate a few key features, with some examples including mean average value, waveform length, zero crossing, and slope sign change. These features are then processed through a myoelectric classifier - with the most popular types for EMG data being k-nearest neighbor, latent dirichlet allocation, and artificial neural networks. The classification results are used to tweak features selected for the training and control datasets/models.{'\n'}
            {'\n'}
            A user of the prosthetic, however, would have a slightly different experience. A non-invasive prosthetic takes inputs from the users’ muscles, similarly to in the classification setup in the development cycle and the same data is taken and processed before being classified based on the model developed with the training data earlier. The results of the classifier are pattern-matched to movement signals for the embedded software in the prosthetic to run, thus, making EMG signals move a prosthetic.
        </p>
        <h3>Myoelectric Classification</h3>
        <p>
          To create a model that relates hand movement to EMG data, sensors are placed around the forearm and relevant muscle groups, and test subjects perform specific and repeated hand gestures. After the output from these sensors is filtered to remove noise, the data is segmented into short-timed pulses which are used to calculate features (ex: mean average value, waveform length, zero crossing, and slope sign change) that preserve accuracy while drastically improving efficiency by reducing dimensionality. These features are used to create–or ’train’--a classifier. Popular classifier types for EMG signals include k-nearest neighbor, latent Dirichlet allocation, and artificial neural networks. The classification results/validation metrics are then used to tweak the features selected.
        </p>
        <h3>Myoelectric Control</h3>
        <p>
          To use a prosthetic, an amputee user would attempt to replicate target gestures as if their entire extremity still existed. Similarly to the training setup, sensors would read EEG signals off of their muscles, then filter, segment, and perform feature analysis. Using the trained model from before, features collected from EEG data could be classified into gestures that could be physically recreated using hardware embedded into the prosthetic.
        </p>
    </div>
  );
};

export default System_Diagram;
