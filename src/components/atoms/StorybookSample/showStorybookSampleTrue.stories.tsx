import React from 'react';
import Something from '.';

const props = {
  isSomething: true,
  somethings: ['first', 'second'],
};

export default {
  title: 'Atoms',
};

export const showStorybookSampleTrue = () => <Something {...props} />;
