import React from 'react';

const Context = () => {
  return (
    <div>
      <h1>Context: Additional Use Case</h1>
      <h2>Application</h2>
      <p style={{ whiteSpace: 'pre-line' }}>
        Data from EMG can be used in order to power upper extremity prosthetics for amputees without the need for hours of surgery, nor the invasive connections directly to the nervous system required.{'\n'}
        {'\n'}
        Current prosthetics are largely limited, especially when it comes to fine motor control like a hand, for example. The cheapest and most commonly found prosthetics are either passive or body-driven, with a few being externally powered by direct connections to the nervous system. While some myoelectric prosthetics are currently available on the market, they are distinctly limited to simple functions like opening and closing a hand as opposed to the original functions of the affected appendages.{'\n'}
        {'\n'}
        EMG data paired with current advances in neurotechnology has the potential to create upper extremity prosthetics that can provide high levels of precise functionality to amputees. This would increase the accessibility of daily life functions frequently taken for granted for many individuals.{'\n'}
        </p>
        <h2>System Diagram</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
            There are two primary phases of the technology for translating EMG inputs into movements in a prosthetic: myoelectric classification and myoelectric control.{'\n'}
            {'\n'}
            EMG input data is collected from specific hand movements made with sensors around the forearm and primary muscles recording information. After a significant amount of pre-processing to try to limit excess noise, the data is segmented into various time windows - through both overlapping and individual models. The segmented data is then used to calculate a few key features, with some examples including mean average value, waveform length, zero crossing, and slope sign change. These features are then processed through a myoelectric classifier - with the most popular types for EMG data being k-nearest neighbor, latent dirichlet allocation, and artificial neural networks. The classification results are used to tweak features selected for the training and control datasets/models.{'\n'}
            {'\n'}
            A user of the prosthetic, however, would have a slightly different experience. A non-invasive prosthetic takes inputs from the users’ muscles, similarly to in the classification setup in the development cycle and the same data is taken and processed before being classified based on the model developed with the training data earlier. The results of the classifier are pattern-matched to movement signals for the embedded software in the prosthetic to run, thus, making EMG signals move a prosthetic.
        </p>
    </div>
  );
};

export default Context;
