/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Step3Component from 'components/wizard/steps/Step3Component.js';

describe('Step3Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Step3Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('step3-component');
  });
});
