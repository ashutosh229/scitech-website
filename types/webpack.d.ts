// src/types/webpack.d.ts
declare module "__WebpackModuleApi" {
  export interface RequireContext {
    (id: string): string;
    keys(): string[];
    resolve(id: string): string;
  }
}

declare function require(path: string): any & {
  context: (
    path: string,
    deep?: boolean,
    filter?: RegExp
  ) => __WebpackModuleApi.RequireContext;
};
