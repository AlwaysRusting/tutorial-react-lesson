import React from 'react';
import SingleLineText, { Props } from '.';

const props: Props = {
  text: 'Learn More',
  left: 20,
  top: 20,
  color: '#545454',
  minWidth: 500,
};

export default {
  title: 'Atoms',
};

export const textSingleLineDefault = () => <SingleLineText {...props} />;
