declare module '@styles/direction' {
  /**
   * 辺に値を与える場合の型
   */
  export type DirectionType<T> = { left?: T; right?: T; top?: T; bottom?: T };

  /**
   * マージンプロパティを与える場合の型
   */
  export type MarginType = DirectionType<number | string>;

  /**
   * パディングプロパティを与える場合の型
   * ※autoは無効だが、パーセントは受け入れられるのでstringはとりあえず対応
   */
  export type PaddingType = DirectionType<number | string>;

  /**
   * 4辺にbooleanを与える場合の型
   */
  export type EdgeType = DirectionType<boolean>;

  /**
   * 4辺に数値を与える場合の型
   */
  export type PositionType = DirectionType<number>;
}
