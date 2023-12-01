import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src={process.env.PUBLIC_URL + "/images/aditi_au.jpg"} alt="Aditi Photo" style={{ width: '20%', height: 'auto', marginRight: '5%'}} />
          <p style={{ whiteSpace: 'pre-line' }}>
            <b>Aditi Vinod</b>{'\n'}
            <i>Class of 2025</i>{'\n'}
            {'\n'}
            Aditi is a Computer Science student at Olin College of Engineering. Before this project she only ever threw scissors in rock-paper-scissors game, but has been seen rocking during live classification battles; this may or may not be due to the classifier being most consistent with rock.
          </p>
      </div>
      <p style={{ display: 'flex', justifyContent: 'space-between' }}>{'\n'}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="/images/ian_au.png" alt="Ian Photo" style={{ width: '20%', height: 'auto', marginRight: '5%'}} />
          <p style={{ whiteSpace: 'pre-line' }}>
            <b>Ian Walsh</b>{'\n'}
            <i>Class of 2026</i>{'\n'}
            {'\n'}
            Ian is an Electrical and Computer Engineering student at Olin College of Engineering. He loves rocks. Which is likely why he always throws it in rock, paper, scissors. He also has a passion for neuroscience and human-computer interaction, and robotics.
          </p>
      </div>
      <p style={{ whiteSpace: 'pre-line' }}>
        MTH2135 & ENGR3635: Neurotechnology, Brains and Machines{'\n'}
        11/7/2023{'\n'}
      </p>
    </div>
  );
};

export default AboutUs;
