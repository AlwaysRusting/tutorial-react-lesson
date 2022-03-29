import { useState, useMemo, SelectHTMLAttributes } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * セレクトボックスプロパティの型
 */
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

/**
 * オプションプロパティの型
 */
export type OptionProps = {
  id?: string;
  value: string;
  text: React.ReactNode;
};

export const useSelect = (initState = '', selectProps?: SelectProps, options?: OptionProps[]) => {
  /**
   * セレクトボックスの値をコントロールするstate
   */
  const [value, setValue] = useState<string>(initState);

  /**
   * 変更イベントが発生したらvalueを更新する
   * @param e
   */
  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  /**
   * セレクトボックスのIDを取得する
   */
  const id = useMemo(() => uuidv4(), []);

  /**
   * ID付きのオプションリストを取得する
   */
  const optionsWithId = useMemo(() => {
    return options?.map(option => {
      // 既にIDが付与されているオプションはそのまま返す
      if (option.id) return option;

      // IDが存在しないものはIDを付けて返す
      option.id = uuidv4();
      return option;
    });
  }, [options]);

  return {
    ...selectProps,
    value,
    onChange: handleValue,
    id,
    options: optionsWithId,
  };
};
