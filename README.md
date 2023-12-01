# Rock, Paper, Scissors Classifier
Authors: Aditi Vinod & Ian Walsh

A model that takes in EMG inputs from armband-collected data and can determine whether the user has thrown rock, paper, or scissors.

# Dependencies
- MATLAB 2023a or later
- Statistics & Machine Learning Toolbox
- Deep Learning Toolbox
- Signal Processing Toolbox

# Available Scripts
`main` - Runs the training & testing and then calculates accuracies/f1 scores/confusion matrices.
`collectData` - Runs the data collection script.
`Concatenate` - compiles several trial runs of data collection together for bulk training.

# Helper Scripts
`preprocessData` - Does the preprocessing on the raw EMG data.
`createFeatures` - Runs feature extraction on the collected data.
