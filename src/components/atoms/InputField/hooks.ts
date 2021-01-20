import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const useInput = (initState = '', inputProps?: InputProps) => {
  /**
   * フィールドの値をコントロールするstate
   */
  const [value, setValue] = useState(initState);

  /**
   * 変更イベントが発生したらvalueを更新する
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  /**
   * 入力フィールドの持つID
   * コンポーネントの更新のたびにid作り直すのもあれなので、useMemoしてます
   */
  const id: string = useMemo(() => uuidv4(), []);

  return {
    ...inputProps,
    value,
    onChange: handleChange,
    id,
  };
};
