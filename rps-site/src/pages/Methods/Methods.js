import React from 'react';

const Methods = () => {
  return (
    <div>
      <h1>Methods</h1>
        <h2>Data Collection</h2>
            <h3>Surface EMG</h3>
                <img src="/images/emg.png" alt="Arm EMG" style={{ width: '75%', height: 'auto' }} />
                <p>
                    Surface electromyography signal processing is a way to record the duration and magnitude of muscle activity. However, because surface EMG is non-invasive, there are multiple factors that create noise in raw EMG data including but not limited to skin, sensor placement, blood flow, temperature, and the electronic equipment itself. 
                </p>
            <h3>Hardware</h3>
                <img src="/images/pison.png" alt="PISON Vulcan Control Band" style={{ width: '50%', height: 'auto' }} />
                <p>
                    The PISON Technology Vulcan Control Band uses medical-grade electrodes and was used to pick up EMG data across four channels. 
                </p>
            <h3>Collection Protocol</h3>
                <p>
                    In order to minimize confounding due to noise, a specific protocol was followed during data collection. Control band location on arm, hand starting position, user’s arm position, user’s overall position, and preamble movement were maintained.
                </p>
                <img src="/images/armlocation.jpg" alt="PISON Arm Position" style={{ width: '75%', height: 'auto' }} />
                <p>
                    Control band location - the control band is worn like a watch on the outside of the user’s wrist with the “P” symbol facing their hand. 
                </p>
                <img src="/images/resting.jpg" alt="User Arm Position" style={{ width: '75%', height: 'auto' }} />
                <p>
                    Hand starting position - the default resting position is an outstretched arm with a relaxed hand.
                </p>
                <img src="/images/sitting.jpg" alt="User Overall Position" style={{ width: '75%', height: 'auto' }} />
                <p>
                    User’s arm position & user’s overall position - the elbow of the arm being tested is supported, either by a solid chair arm or a desk while they are sitting.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="/images/rockc.gif" alt="Rock" style={{ width: '75%', height: 'auto' }} />
                    <img src="/images/paperc.gif" alt="Paper" style={{ width: '75%', height: 'auto' }} />
                    <img src="/images/scissorc.gif" alt="Scissors" style={{ width: '75%', height: 'auto' }} />
                </div>        
                <p style={{ whiteSpace: 'pre-line' }}>
                    Preamble movement - there was no movement (like bouncing up and down) before ‘shooting’ rock, paper, or scissors.{'\n'}
                    {'\n'}
                    600 individual trials of data were collected from two individuals over two sessions following the above guidelines - 200 rock, 200 paper, and 200 scissors. Note that not all of the collected data ended up being used in the final model.
                </p>
        <h2>Analysis</h2>
            <h3>Pre-Processing</h3>
                <p>
                    The use of time-domain filters is a critical step in reducing error in gesture classification. The largest sources of error are voltage wander (low-frequency fluctuations in voltage) and line noise (and its associated harmonics). First, voltage wander. Signals above ~20Hz contain important EMG data. Signals slower than 20Hz can do nothing but worsen test accuracy. A high pass filter (cutoff 20Hz) can be employed to remove unwanted low-frequency distortion. Because most EMG devices will be operated in places that likely contain one or more 60Hz line-voltage appliances, 60Hz, 120Hz, and 180Hz notch filters are also employed.
                </p>
            <h3>Features & Feature Selection</h3>
                <p style={{ whiteSpace: 'pre-line' }}>
                    Feature extraction is a way to emphasize different aspects of raw EMG data to allow pattern matching and prediction models a better starting point. Myoelectric signals are generally isolated by time domain and frequency domain; this application primarily focuses on time domain due to ease of implementation.{'\n'}
                    {'\n'}
                    Final features included in model: 
                    <ol>
                        <li>Variance</li>
                        <li>Zero Crossings</li>
                        <li>Waveform Length</li>
                        <li>Mean Absolute Value</li>
                        <li>Root Mean Square</li>
                        <li>Slope-Sign Change</li>
                    </ol>
                </p>
            <h3>Algorithms/Classifiers</h3>
                <p style={{ whiteSpace: 'pre-line' }}>
                    Linear Discriminant Analysis (LDA) was used to classify gestures based on feature inputs. LDA attempts to find a linear combination of features that characterizes classes. LDA was chosen because it provided the best results (over 98% classification accuracy against test data).{'\n'}
                    {'\n'}
                    Other tested classification models include binary search trees, k-nearest neighbor - with varying k-values, and neural networks. 
                </p>
        <h2>Improvement Attempts</h2>
            <p style={{ whiteSpace: 'pre-line' }}>
                Several modifications were made to improve model classification accuracy. 
                <ol>
                    <li>
                        Small amounts of noise were added to readings to help cover potential issues when sampling, including but not limited to the following:
                        <ol type="a">
                            <li>ADC aliasing/feedback</li>
                            <li>Unwanted HF EM noise,</li>
                        </ol>
                    </li>
                    <li>Features of the individual EMG data explorations were merged. In total, 7 features were extracted:
                        <ol type="a">
                            <li>Variance</li>
                            <li>Zero Crossings</li>
                            <li>Waveform Length</li>
                            <li>Mean Absolute Value</li>
                            <li>Root Mean Square</li>
                            <li>Slope-Sign Change</li>
                        </ol>
                    </li>
                    <li>The classification model changed several times throughout testing. K-nearest neighbor, Binary Search Trees, and Neural Networks were all tested before finally settling on Linear Discriminant Analysis.</li>
                    <li>The original training dataset of 300 trials was doubled in size with another data collection session</li>
                </ol>
                The static model’s initial outputs were suspicious at first as they were extremely good at classification. Since the results varied in accuracy with different classifiers, this concern was resolved.                     {'\n'}
                {'\n'}
                However, the live classification scores were abysmal, with varying sensor placement likely being the culprit. Low accuracy was often correlated with the EMG electrodes being too far back on users’ wrists.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={process.env.PUBLIC_URL +"/images/trainres.png"} alt="Training CF" style={{ width: '50%', height: 'auto' }} />
                    <img src={process.env.PUBLIC_URL +"/images/testres.png"} alt="Testing CF" style={{ width: '50%', height: 'auto' }} />
            </div>  
            <img src={process.env.PUBLIC_URL +"/images/liveres.png"} alt="Live Results CF" style={{ width: '50%', height: 'auto' }} />
    </div>
  );
};

export default Methods;
