declare module '@styles/frame' {
  import React from 'react';
  import { MarginType, PaddingType } from '@styles/direction';

  /**
   * フレーム系コンポーネントのインターフェイス
   */
  export interface FrameType {
    children?: React.ReactNode;
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
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignContent?: string;
    alignItems?: string;
    styleDisplay?: string;
    disable?: boolean;
    disabledStyle?: Partial<DisabledFrameType>;
  }

  /**
   * フレームプロパティをstyled-componentsに渡すときの型
   * ※marginはそのままだと使えないのでmarginSizeにリネーム
   */
  export type FrameStyleType = Omit<FrameType, 'margin' | 'children' | 'disable' | 'disabledStyle'> & {
    marginSize?: MarginType;
  };

  /**
   * フレームプロパティの必要項目を全て任意にした型
   */
  export type DisabledFrameType = Partial<Omit<FrameType, 'children' | 'disable' | 'disabledStyle'>>;
}
