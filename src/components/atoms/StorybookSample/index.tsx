import React from 'react';
import styled from 'styled-components';

export type Props = {
  isSomething: boolean;
  somethings: string[];
};

const StorybookSample: React.FC<Props> = (props: Props) => {
  const { isSomething, somethings } = props;

  const somethingList: JSX.Element[] = somethings.map((something: string, index: number) => {
    return <div key={index}>{something}</div>;
  });

  const viewSomething = isSomething ? somethingList : <div>Not Something</div>;

  return <View>{viewSomething}</View>;
};

const View = styled.div``;

export default StorybookSample;
