'use strict';

import React from 'react';

require('styles/wizard/Wizard.css');

import StepZilla from 'react-stepzilla';
import Step1Component from './steps/Step1Component';
import Step2Component from './steps/Step2Component';
import Step3Component from './steps/Step3Component';
import Step4Component from './steps/Step4Component';

class WizardComponent extends React.Component {
  render() {
    return (
      <div className='step-progress'>
        <StepZilla steps={[
          {name: 'First', component: <Step1Component/> },
          {name: '...Now this', component: <Step2Component/> },
          {name: 'You\'r getting there', component: <Step3Component/> },
          {name: 'And finally...', component: <Step4Component/> }
          ]}/>
      </div>
    );
  }
}

WizardComponent.displayName = 'WizardWizardComponent';

// Uncomment properties you need
// WizardComponent.propTypes = {};
// WizardComponent.defaultProps = {};

export default WizardComponent;
