import React from 'react';
import SelectBox, { Props } from '.';

const props: Props = {
  options: [
    { id: 'a', value: 'aaa', text: 'a desu' },
    { id: 'b', value: 'bbb', text: 'b desu' },
    { id: 'c', value: 'ccc', text: 'c desu' },
  ],
};

export default {
  title: 'Atoms',
};

export const basicSelectBox = () => <SelectBox {...props} />;
