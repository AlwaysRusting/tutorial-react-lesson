import React from 'react';
import styled from 'styled-components';

export type Props = {
  text: string;
  left: number;
  top: number;
  color: string;
};

type StyleProps = Omit<Props, 'text'>;

const LearnMore: React.FC<Props> = (props: Props) => {
  /**
   * @const text 初期値「Learn More」で値を受け取る
   * @const position textを取り除いた残りを変数（連想配列）として受け取る
   */
  const { text = 'Learn More', ...position } = props;

  // jsxオブジェクトを返す
  return <Text {...position}>{text}</Text>;
};

const Text = styled.div<StyleProps>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;

  &::before {
  }

  &:hover {
    color: #ef4a81;
  }

  @media screen and (min-width: 767px) {
    color: #e4002b;
  }
`;

export default LearnMore;
