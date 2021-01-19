import React from 'react';
import SingleLineText, { Props } from '.';

const props: Props = {
  text: 'Learn More',
  left: 100,
  top: 100,
  color: '#545454',
  minWidth: 800,
};

export default {
  title: 'Atoms',
};

export const textSingleLineDefault = () => <SingleLineText {...props} />;
