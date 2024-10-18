declare type RootState = import('../providers/Store').StateSchema;
declare type AppDispatch = import('../providers/Store').AppDispatch;

declare const __SERVER_PORT__: number;
declare const __SERVER_API_URL__: string;
declare const __YANDEX_API_URL__: string;
declare const __YANDEX_RESOURCES_URL__: string;

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
