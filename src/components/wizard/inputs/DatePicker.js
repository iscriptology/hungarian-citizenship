'use strict';

import React from 'react';
import t from 'tcomb-form/lib/index';
import DatePicker from 'react-datepicker';

class DatePickerFactory extends t.form.Component {
  getTemplate(){
    return (locals) => {
      return <div className="field field-depth-1"><label>{locals.label}</label>
        <DatePicker
          selected={locals.value}
          onChange={locals.onChange}
          locale='he-il'
          placeholder='בחר...'
        />
      </div>
    };
  }
}

const TcombDatePicker = t.Date;
TcombDatePicker.getTcombFormFactory = () => {
  return DatePickerFactory;
};

export default TcombDatePicker;
