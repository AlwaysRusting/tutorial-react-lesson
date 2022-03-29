declare module '@styles/image/web' {
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
    bgColor?: string;
    bgColorAlpha?: number;
    roundSize?: number | number[];
    borderWidth?: number;
    borderColor?: string;
    borderColorAlpha?: number;
    borderStyle?: string;
    margin?: MarginType;
    padding?: PaddingType;
    opacity?: number;
    alignContent?: string;
    alignItems?: string;
    styleDisplay?: string;
    x?: number;
    y?: number;
    imageWidth?: number | string;
    imageHeight?: number | string;
    repeat?: string;
    source: string;
    disable?: boolean;
    disabledStyle?: Partial<DisabledImageType>;
  }

  /**
   * イメージプロパティをstyled-componentsに渡すときの型
   * ※marginはそのままだと使えないのでmarginSizeにリネーム
   */
  export type ImageStyleType = Omit<ImageType, 'margin' | 'disable' | 'disabledStyle'> & {
    marginSize?: MarginType;
  } & Required<Pick<ImageType, 'x' | 'imageWidth' | 'imageHeight'>>;

  /**
   * イメージプロパティの必要項目を全て任意にした型
   */
  export type DisabledImageType = Partial<Omit<ImageType, 'disable' | 'disabledStyle'>>;
}
