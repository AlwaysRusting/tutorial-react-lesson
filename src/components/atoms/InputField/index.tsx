import React from 'react';
import styled from 'src/libs/packages/common/css-in-js';

import { InputProps } from './hooks';

export type Props = InputProps;

/**
 * @see https://zenn.dev/ksyunnnn/articles/9ac2715a152be1
 * @param props
 */
const InputField: React.FC<Props> = (props: Props) => {
  const { ...inputProps } = props;
  return <Input {...inputProps} />;
};

const Input = styled.input`
  position: absolute;
  left: 20px;
  top: 20px;

  width: 240px;
`;

export default InputField;
