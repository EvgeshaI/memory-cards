declare type RootState = import('../providers/Store').StateSchema;
declare type AppDispatch = import('../providers/Store').AppDispatch;

declare const __SERVER_PORT__: number;
declare const __API_KEY_PIXABAY__: string;

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
