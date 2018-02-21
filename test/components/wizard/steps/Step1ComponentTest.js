/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Step1Component from 'components/wizard/steps/Step1Component.js';

describe('Step1Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Step1Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('step1-component');
  });
});
