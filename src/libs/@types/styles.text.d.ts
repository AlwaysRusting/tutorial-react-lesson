declare module '@styles/text' {
  import { MarginType, PaddingType } from '@styles/direction';

  /**
   * テキスト系コンポーネントのインターフェイス
   */
  export interface TextType {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    width: number;
    height: number;
    bgColor?: string;
    bgColorAlpha?: number;
    roundSize?: number | number[];
    textAlign?: string;
    fontFamily?: string;
    fontStyle?: string;
    fontWeight?: number;
    fontSize: number;
    fontColor?: string;
    fontColorAlpha?: number;
    strokeWidth?: number;
    strokeColor?: string;
    strokeColorAlpha?: number;
    margin?: MarginType;
    padding?: PaddingType;
    opacity?: number;
    spacing?: number;
    disable?: boolean;
    disabledStyle?: Partial<DisabledTextStyle>;
  }

  /**
   * テキストプロパティをstyled-componentsに渡すときの型
   * ※marginはそのままだと使えないのでmarginSizeにリネーム
   */
  export type TextStyleType = Omit<TextType, 'margin' | 'disable' | 'disabledStyle'> & {
    marginSize?: MarginType;
  };

  /**
   * テキストプロパティの必要項目を全て任意にした型
   */
  export type DisabledTextStyle = Partial<Omit<TextType, 'disable' | 'disabledStyle'>>;
}
