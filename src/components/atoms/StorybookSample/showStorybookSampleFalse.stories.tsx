import React from 'react';
import StorybookSample from '.';

const props = {
  isSomething: false,
  somethings: ['first', 'second'],
};

export default {
  title: 'Atoms',
};

export const showStorybookSampleFalse = () => <StorybookSample {...props} />;
