import React from 'react';
import { Grid, Typography } from '@mui/material';

const Data_Collection = () => {
    const imageItems = [
        {
          src: './images/armlocation.jpg',
          alt: 'PISON Arm Position',
          text: 'Control band location - the control band is worn like a watch on the outside of the user’s wrist with the “P” symbol facing their hand.',
        },
        {
          src: './images/resting.jpg',
          alt: 'User Arm Position',
          text: 'Hand starting position - the default resting position is an outstretched arm with a relaxed hand.',
        },
        {
          src: './images/sitting.jpg',
          alt: 'User Overall Position',
          text: 'User’s arm position & user’s overall position - the elbow of the arm being tested is supported, either by a solid chair arm or a desk while they are sitting.',
        },
      ];

  return (
    <div>
        <h2>Data Collection</h2>
            <h3>Surface EMG</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="./images/emg.png" alt="Arm EMG" style={{ width: '25%', height: 'auto', marginRight: '2%'}} />
                    <p style={{ whiteSpace: 'pre-line' }}>
                        Surface electromyography signal processing is a way to record the duration and magnitude of muscle activity. However, because surface EMG is non-invasive, there are multiple factors that create noise in raw EMG data including but not limited to skin, sensor placement, blood flow, temperature, and the electronic equipment itself. 
                    </p>
                </div>
            <h3>Hardware</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="./images/pison.png" alt="PISON Vulcan Control Band" style={{ width: '25%', height: 'auto', marginRight: '2%'}} />
                    <p style={{ whiteSpace: 'pre-line' }}>
                        The PISON Technology Vulcan Control Band uses medical-grade electrodes and was used to pick up EMG data across four channels. 
                    </p>
                </div>

            <h3>Collection Protocol</h3>
                <p>
                    In order to minimize confounding due to noise, a specific protocol was followed during data collection. Control band location on arm, hand starting position, user’s arm position, user’s overall position, and preamble movement were maintained.
                </p>

                <Grid container>
                    {imageItems.map((item, index) => (
                        <Grid key={index} item xs={4}>
                            <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
                            <Typography variant="subtitle1" style={{ whiteSpace: 'pre-line' }}>
                                {item.text}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                <p style={{ whiteSpace: 'pre-line' }}>{'\n'}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src="./images/rockc.gif" alt="Rock" style={{ width: 'auto', height: 'auto' }} />
                    <img src="./images/paperc.gif" alt="Paper" style={{ width: 'auto', height: 'auto' }} />
                    <img src="./images/scissorc.gif" alt="Scissors" style={{ width: 'auto', height: 'auto' }} />
                </div>        
                <p style={{ whiteSpace: 'pre-line' }}>
                    Preamble movement - there is no movement (like bouncing up and down) before ‘shooting’ rock, paper, or scissors.{'\n'}
                    {'\n'}
                    Over 600 individual trials of data were collected from two individuals over two sessions following the above guidelines with an equal distribution of rock, paper, and scissors data.
                </p>
    </div>
  );
};

export default Data_Collection;
