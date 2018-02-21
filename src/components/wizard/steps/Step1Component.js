'use strict';

import React from 'react';

import t from 'tcomb-form/lib'; // load tcomb-form without templates and i18n
import i18n from 'tcomb-form/lib/i18n/en';
import semantic from 'tcomb-form-templates-semantic';

t.form.Form.i18n = i18n;
t.form.Form.templates = semantic;

require('styles/wizard/steps/Step1.css');

const Identity = t.struct({
  firstName: t.String,
  lastName: t.String
});

const identityOptions = {
  fields: {
    firstName: {
    }
  },
  legend: 'Identity',
  help: 'Your name, ID number etc.'
};

const Birth = t.struct({
  date: t.Date,
  city: t.String
});

const birthOptions = {
  fields: {

  },
  legend: 'Birth'
};

class Step1Component extends React.Component {
  render() {
    return (
      <div className="step step1-component">
        <h3>Basic information about you</h3>

        <t.form.Form ref="basicInformationForm" options={identityOptions} type={Identity} />
        <t.form.Form ref="birthForm" options={birthOptions} type={Birth} />
      </div>
    );
  }
}

Step1Component.displayName = 'WizardStepsStep1Component';

// Uncomment properties you need
// Step1Component.propTypes = {};
// Step1Component.defaultProps = {};

export default Step1Component;
