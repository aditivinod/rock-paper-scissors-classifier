import React from 'react';

const Final = () => {
  return (
    <div>
        <h1>Interpretation</h1>
            <h2>Numerical Results</h2>
                <p>
                    Model ‘goodness’ was defined by three characteristics: F1 score, accuracy, and specificity (per category)
                    <ul>
                        <li>Training</li>
                        <ul>
                            <li>F1: 100%</li>
                            <li>Accuracy: 100%</li>
                            <li>Specificity:</li>
                            <ul>
                                <li>Scissors: 100%</li>
                                <li>Paper: 100%</li>
                                <li>Rock: 100%</li>
                            </ul> 
                        </ul>
                        <li>Test</li>
                        <ul>
                            <li>F1: 100%</li>
                            <li>Accuracy: 100%</li>
                            <li>Specificity:</li>
                            <ul>
                                <li>Scissors: 100%</li>
                                <li>Paper: 100%</li>
                                <li>Rock: 100%</li>
                            </ul> 
                        </ul>
                        <li>Live</li>
                        <ul>
                            <li>F1: 53.8%</li>
                            <li>Accuracy: 55.6%</li>
                            <li>Specificity:</li>
                            <ul>
                                <li>Scissors: 10.0%</li>
                                <li>Paper: 76.7%</li>
                                <li>Rock: 80.0%</li>
                            </ul> 
                        </ul>
                    </ul>
                </p>
            <h2>Summary</h2>
                <p>
                    Ultimately, a gesture classifier using Linear Discriminant Analysis, several noise-reducing filters, and seven feature extraction algorithms provided accurate, reliable and fast results while a rich training dataset of over 600 gesture samples and a well-tuned our model helped prevent overfitting. 
                </p>
            <h2>Limitations</h2>
                <p>
                    The training set, as discovered during live trails, is significantly more accurate when test data is farmed from the same physical patch of skin. When the sensor is incorrectly installed (too far up, down, left, or right of the ‘training patch’), miserable accuracies and F1 scores result. Furthermore, mimicking exactly how the gestures were performed in the training set was imperative to preventing inaccurate predictions.
                </p>
            <h2>Next Steps</h2>
                <p>
                    There are several potential areas of improvement within the model’s quality and robustness of classification:
                    <ol>
                        <li>Incorporating more features: All of the features are time-domain specific; measuring frequency-domain properties has seen promise in other implementations and the relative strength of frequency components may be the key to more robust classification, especially when faced with sensor movement</li>
                        <li>Expanding training database: As of now, there are only two users in the training data. Users with different skin compositions/conductivities may read differently, and their classification results may be skewed</li>
                        <li>K-nearest neighbor, binary search trees, and linear discriminant analysis were tested with the model significantly; however other models may be better at classifying EMG features. For example, while neural networks were tested, with more fine-tuning, they likely can give better results than the current classifier</li>
                    </ol>
                </p>
    </div>
  );
};

export default Final;
