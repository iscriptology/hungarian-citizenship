/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Step2Component from 'components/wizard/steps/Step2Component.js';

describe('Step2Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Step2Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('step2-component');
  });
});
