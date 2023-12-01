import React from 'react';

const Error_Effects = () => {
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
    </div>
  );
};

export default Error_Effects;
