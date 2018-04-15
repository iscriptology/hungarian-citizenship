'use strict';

import React from 'react';

import t from 'tcomb-form/lib'; // load tcomb-form without templates and i18n
import i18n from 'tcomb-form/lib/i18n/en';
import semantic from 'tcomb-form-templates-semantic';

import TcombDatePicker from 'components/wizard/inputs/DatePicker';
import TcombCityPicker from 'components/wizard/inputs/CityPicker';


t.form.Form.i18n = i18n;
t.form.Form.templates = semantic;

require('styles/wizard/steps/Step1.css');

require('react-datepicker/dist/react-datepicker.css');
require('react-select/dist/react-select.css');

const Identity = t.struct({
  gender: t.enums.of([
    'זכר',
    'נקבה'
  ]),
  firstName: t.String,
  lastName: t.String,
  isMarried: t.Boolean
});

const Birth = t.struct({
  date: TcombDatePicker,
  city: TcombCityPicker
});


const Marriage = t.struct({
  hello: t.String
});

class Step1Component extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      options: {
        identity: {
          fields: {
            gender: {
              label: 'מין',
              factory: t.form.Radio
            },
            firstName: {
              label: 'שם פרטי'
            },
            lastName: {
              label: 'שם משפחה'
            },
            isMarried: {
              label: 'האם אתה נשוי?'
            }
          },
          legend: 'קצת עליך',
          help: 'שמות תמיד יש לכתוב כפי שמופיעים באנגלית בתעודות הרשמיות אלא אם כן מצוין במפורש אחרת'
        },
        birth: {
          fields: {
            date: {
              label: 'תאריך לידה'
            },
            city: {
              label: 'עיר הולדתך בישראל'
            }
          },
          legend: 'לידה',
          help: 'אל הטופס תצטרך לצרף תעודת לידה שלך חתומה באמצעות אפוסטיל'
        },
        marriage: {
          disabled: true,
          legend: 'נישואין',
          help: 'אל הטופס תצטרך לצרף תעודת נישואין חתומה באמצעות אפוסטיל'
        }
      },
      identity: null,
      birth: null,
      marriage: null
    };
  }

  onIdentityChange(v){
    const options = t.update(this.state.options, {
      marriage: {
        disabled: {'$set': !v.isMarried}
      }
    });
    this.setState({options: options, identity: v});
  }

  onBirthChange(v){
    this.setState({birth: v})
  }

  onMarriageChange(v){
    this.setState({marriage: v})
  }

  render() {
    return (
      <div className="step step1-component">
        <t.form.Form onChange={this.onIdentityChange.bind(this)} value={this.state.identity} ref="IdentityForm" options={this.state.options.identity} type={Identity} />
        <t.form.Form onChange={this.onMarriageChange.bind(this)} value={this.state.marriage} ref="marriageForm" options={this.state.options.marriage} type={Marriage} />
        <t.form.Form onChange={this.onBirthChange.bind(this)} value={this.state.birth} ref="birthForm" options={this.state.options.birth} type={Birth} />
      </div>
    );
  }
}

Step1Component.displayName = 'WizardStepsStep1Component';

// Uncomment properties you need
// Step1Component.propTypes = {};
// Step1Component.defaultProps = {};

export default Step1Component;
