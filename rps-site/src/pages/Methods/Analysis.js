import React from 'react';

const Analysis = () => {
  return (
    <div>
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
    </div>
  );
};

export default Analysis;
