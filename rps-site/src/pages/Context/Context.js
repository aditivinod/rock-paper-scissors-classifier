import React from 'react';

const Context = () => {
  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    border: '2px solid black',
  };

  const cellStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'center',
  };

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

        <h2>Effects of Errors</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
            Error cases in an EMG prosthetic can be considered unequal. For example, dropping an object that can break/shatter is more dangerous than giving a sloppy handshake. {'\n'}
            {'\n'}
            As a result, errors have been split into three general categories: critical errors, social errors, and inconvenience errors. Critical errors are those that can put the user of the prosthetic or individuals nearby in danger, whether that is by dropping and breaking items around them or losing control of their prosthetic. Social errors are accidental actions that can be perceived as social ineptitude or distasteful, such as a halfhearted wave or an inappropriate gesture (when unintended). Inconvenience errors are minor hiccups in performance that ultimately have no major effects on the prosthetic user or individuals around them beyond being a source of irritation; for example, a slight finger jolt. The following cost matrices artificially assign values associated with each of these errors to demonstrate their significance. {'\n'}
            {'\n'}

            Critical{'\n'}
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}><b></b></th>
                  <th style={cellStyle}><b>Correctly Interpreted Signal</b></th>
                  <th style={cellStyle}><b>Incorrectly Interpreted Signal</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}><b>Correct Motion Output</b></td>
                  <td style={cellStyle}>10</td>
                  <td style={cellStyle}>5</td>
                </tr>
                <tr>
                  <td style={cellStyle}><b>Incorrect Motion Output</b></td>
                  <td style={cellStyle}>6</td>
                  <td style={cellStyle}>2</td>
                </tr>
              </tbody>
            </table>
            {'\n'}
            Social{'\n'}
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}><b></b></th>
                  <th style={cellStyle}><b>Correctly Interpreted Signal</b></th>
                  <th style={cellStyle}><b>Incorrectly Interpreted Signal</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}><b>Correct Motion Output</b></td>
                  <td style={cellStyle}>9</td>
                  <td style={cellStyle}>5</td>
                </tr>
                <tr>
                  <td style={cellStyle}><b>Incorrect Motion Output</b></td>
                  <td style={cellStyle}>6</td>
                  <td style={cellStyle}>2</td>
                </tr>
              </tbody>
            </table>
            {'\n'}
            Inconvenience{'\n'}
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={cellStyle}><b></b></th>
                  <th style={cellStyle}><b>Correctly Interpreted Signal</b></th>
                  <th style={cellStyle}><b>Incorrectly Interpreted Signal</b></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}><b>Correct Motion Output</b></td>
                  <td style={cellStyle}>8</td>
                  <td style={cellStyle}>4</td>
                </tr>
                <tr>
                  <td style={cellStyle}><b>Incorrect Motion Output</b></td>
                  <td style={cellStyle}>6</td>
                  <td style={cellStyle}>3</td>
                </tr>
              </tbody>
            </table>
            {'\n'}
            In the above matrices, an incorrect motion output paired with a correct signal is always valued higher than a correct motion output from an incorrect signal as that is an issue with model internal translation as opposed to movement interpretation and can occur accidentally.{'\n'}
            {'\n'}
            There are multiple ways to mitigate the negative effects of the model during the development process. Training on signal data from amputees’ mirrored functional limbs (if existing) can help reduce potentially unknown variables. Alternatively, tuning the motion output model with data from non-amputees can help confirm that the model functions on inputs that are guaranteed to have the ‘correct’ output. A human-in-the-loop earlier model could also be tested with an amputee where they can interpret false classifications and help tweak data; however, this can lead to volunteer-in-data-set bias especially if reinforcement learning is utilized. {'\n'}
            {'\n'}
            Post-production, helping amputees understand what signals they want to be trying to send can reduce user error; this will likely be harder for younger amputees or individuals who have lived without a limb for a long period before moving to an EMG prosthetic. People who have learned to use other types of prosthetics may also have learned behaviors that help those variants function. This could confuse an EMG prosthetic. Additionally, since users have different reaction times in both the training and testing data, a locally run algorithm can be used to line up the movement boundaries based on rest-movement sequences in the waveforms. {'\n'}
        </p>
        <h2>Errors & User Experience</h2>
        <p style={{ whiteSpace: 'pre-line' }}>
          For any prosthetic to feel like it is a part of someone’s body, it must respond just as well as the actual body part it replaces. A slow update rate is unacceptable, and the model and hardware used would need to continuously live sample muscle and nerve activity. Today, most VR headsets run at about 100fps to minimize a ‘fakeness’ reflex (at slower framerates, people start to feel sick–the brain starts to realize something is off), so that 100fps benchmark is a good place to start when defining the lower bound on sensing/analysis capabilities.{'\n'}
          {'\n'}
          Since this is not a health-critical system (ex. pacemaker), which often has a mean survival time of 8.4 years without failing (an extreme upper bound!), a good lower bound would be that of an industrial robot, which has about 12 failures every year with continual use. For a reliable prosthetic, an MTUF would be once every month.{'\n'}
          {'\n'}
          One mistake every month–assuming the ‘mistake’ would take up about a second, equates to a ~99.9999% acceptable mistake threshold. To make that threshold 95% of the time, the model would need to have at least a 99.999995% accuracy.{'\n'}
          {'\n'}
          Yikes! That needs to be reliable! But a ridiculous figure like 99.999995% accuracy also makes sense, considering a prosthetic needs to be working all the time. {'\n'}
          {'\n'}
          Since the results from the initial round of data collection were perfect, statistically there would be no errors. That was only for about 150 samples, though, or about 1.5 seconds of runtime. It is likely that at some point several errors could manifest, so a “100% accuracy” claim doesn’t mean anything with such a limited dataset.{'\n'}
          {'\n'}
          With the 90% accuracy figure, 36k errors every hour would be expected. Fortunately, each of these errors only lasts for 1/100th of a second, so the surrounding data points would help smooth the overall results. With a 95% AMT and 90% accuracy, ~33.6k errors per hour would be expected.
        </p>
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

export default Context;
