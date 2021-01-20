import React from 'react';
import styled from 'src/libs/packages/common/css-in-js';

import { SelectProps, OptionProps } from './hooks';

export type Props = SelectProps & {
  options?: OptionProps[];
};

/**
 * @see https://zenn.dev/ksyunnnn/articles/9ac2715a152be1
 * @param props
 */
const SelectBox: React.FC<Props> = props => {
  const { options, ...selectProps } = props;

  /**
   * オプションリストを生成する
   */
  const optionObject: JSX.Element[] | undefined = options?.map(option => (
    <Option key={option.id} value={option.value}>
      {option.text}
    </Option>
  ));

  return (
    <Select {...selectProps}>
      <option value="">選択してください</option>
      {optionObject}
    </Select>
  );
};

const Select = styled.select`
  position: absolute;
  left: 20px;
  top: 20px;

  width: 240px;
`;

const Option = styled.option`
  width: 240px;
`;

export default SelectBox;
