declare module '@styles/bgimage' {
  import { MarginType, PaddingType } from '@styles/direction';

  /**
   * イメージ系コンポーネントのインターフェイス
   */
  export interface BgImageType {
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
    disabledStyle?: Partial<DisabledBgImageType>;
  }

  /**
   * イメージプロパティをstyled-componentsに渡すときの型
   * ※marginはそのままだと使えないのでmarginSizeにリネーム
   */
  export type BgImageStyleType = Omit<BgImageType, 'margin' | 'disable' | 'disabledStyle'> & {
    marginSize?: MarginType;
  } & Required<Pick<BgImageType, 'x' | 'imageWidth' | 'imageHeight'>>;

  /**
   * イメージプロパティの必要項目を全て任意にした型
   */
  export type DisabledBgImageType = Partial<Omit<BgImageType, 'disable' | 'disabledStyle'>>;
}
