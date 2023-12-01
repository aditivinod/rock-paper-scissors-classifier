import React from 'react';

const Errors_UX = () => {
  return (
    <div>
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
    </div>
  );
};

export default Errors_UX;
