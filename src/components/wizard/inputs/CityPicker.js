'use strict';

import React from 'react';
import t from 'tcomb-form/lib/index';
import Select from 'react-select';
import cities from '../../../data/israel-cities';

const citiesForSelect = cities.map(city => {
  return {
    label: city.name,
    value: city.engName
  }
});

class CityPickerFactory extends t.form.Component {
  getTemplate(){
    return (locals) => {
      return <div className="field field-depth-1"><label>{locals.label}</label>
        <Select
          rtl={true}
          className='cities-select'
          value={locals.value}
          onChange={locals.onChange}
          options={citiesForSelect}
          placeholder='בחר...'
        />
      </div>
    };
  }
}

class TcombCityPicker extends t.String {}

TcombCityPicker.getTcombFormFactory = () => {
  return CityPickerFactory;
};

export default TcombCityPicker;
