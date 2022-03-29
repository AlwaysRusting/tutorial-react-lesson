declare module '@styles/image/native' {
  import { ImageSourcePropType } from 'react-native';
  import { MarginType, PaddingType } from '@styles/direction';

  /**
   * イメージ系コンポーネントのインターフェイス
   */
  export interface ImageType {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    width: number;
    height: number;
    margin?: MarginType;
    padding?: PaddingType;
    opacity?: number;
    alignContent?: string;
    alignItems?: string;
    styleDisplay?: string;
    source: ImageSourcePropType;
    disable?: boolean;
    disabledStyle?: Partial<DisabledImageType>;
  }

  /**
   * イメージプロパティをstyled-componentsに渡すときの型
   * ※marginはそのままだと使えないのでmarginSizeにリネーム
   */
  export type ImageStyleType = Omit<ImageType, 'margin' | 'disable' | 'disabledStyle'> & {
    marginSize?: MarginType;
  };

  /**
   * イメージプロパティの必要項目を全て任意にした型
   */
  export type DisabledImageType = Partial<Omit<ImageType, 'disable' | 'disabledStyle'>>;
}
