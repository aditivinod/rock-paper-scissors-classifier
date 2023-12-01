import React from 'react';

const Improvement = () => {
  return (
    <div>
        <h2>Classifier Iteration</h2>
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

export default Improvement;
