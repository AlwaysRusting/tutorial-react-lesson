import React from 'react';
import styled from 'styled-components';

export type Props = {
  children?: React.ReactNode;
  text?: string;
  left: number;
  top: number;
  color: string;
  minWidth?: number;
};

type StyleProps = Omit<Props, 'children' | 'text'>;

const SingleLineText: React.FC<Props> = (props: Props) => {
  /**
   * @const children このコンポーネントにくくられた子要素
   * @const text 初期値「(空白)」で値を受け取る
   * @const position textを取り除いた残りを変数（連想配列）として受け取る
   */
  const { children, text = '', minWidth = 746, ...styleProps } = props;

  /**
   * スタイルに渡すプロパティを生成する
   */
  const textProps = { ...styleProps, minWidth };

  // jsxオブジェクトを返す
  return <Text {...textProps}>{children || text}</Text>;
};

const Text = styled.div<StyleProps>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  color: ${props => props.color};

  &::before {
  }

  &:hover {
    color: #307fe2;
  }

  @media screen and (min-width: ${props => props.minWidth}px) {
    color: #e4002b;
  }
`;

export default SingleLineText;
