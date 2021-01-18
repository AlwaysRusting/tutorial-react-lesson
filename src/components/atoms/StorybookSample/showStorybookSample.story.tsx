import React from 'react';
import Something from './';

const props = {
  isSomething: false,
  somethings: [],
};

export default {
  title: 'Something',
};

export const showSomething = () => <Something {...props} />;
