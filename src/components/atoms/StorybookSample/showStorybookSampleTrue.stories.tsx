import React from 'react';
import StorybookSample from '.';

const props = {
  isSomething: true,
  somethings: ['first', 'second'],
};

export default {
  title: 'Atoms',
};

export const showStorybookSampleTrue = () => <StorybookSample {...props} />;
