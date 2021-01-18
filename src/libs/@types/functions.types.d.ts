declare module '@functions/types' {
  /**
   * Tの型からKを除いたものをOptionalにする
   * @see https://zenn.dev/bom_shibuya/articles/ed8fd9f80d3782b1f156
   */
  export type OptionalExceptFor<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

  /**
   * Tの型からKを除いたものをRequiredにする
   * @see https://zenn.dev/bom_shibuya/articles/ed8fd9f80d3782b1f156
   */
  export type RequiredExceptFor<T, K extends keyof T> = Pick<T, K> & Required<Omit<T, K>>;
}
