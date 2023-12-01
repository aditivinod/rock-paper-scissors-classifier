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
                        <li>Variance - The average squared deviation of the signal from its mean. In this case, the signal is all of the time points for a single channel and trial.</li>
                        <li>Zero Crossings -  How many times the signal crossed from a positive voltage to a negative one. This is a measure of activity. The more activity, the more zero crossings.</li>
                        <li>Waveform Length - The extent to which the amplitude between adjacent EMG signals changes; the more a single value changes, the longer the signal’s length.</li>
                        <li>Mean Absolute Value - The average potential of the signal. This gives a measure of the average nerve activity read by the sensor.</li>
                        <li>Root Mean Square - The energy/power of an EMG signal, which correlates to the amount of muscle production and duration of muscle activities.</li>
                        <li>Slope-Sign Change - A count that increases every time the slope of a signal changes slope sign. A mark of signal intensity.</li>
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
