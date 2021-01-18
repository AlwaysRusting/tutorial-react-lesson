import React from 'react';
import Something from '.';

const props = {
  isSomething: false,
  somethings: ['first', 'second'],
};

export default {
  title: 'Atoms',
};

export const showStorybookSampleFalse = () => <Something {...props} />;
