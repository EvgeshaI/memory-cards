export const generateSVG = (width: number, height: number) => {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <style>
      .front {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: #d8dbe2;
        background-image:
          repeating-radial-gradient(
            circle at 0 100%,
            rgba(2, 40, 89, 0.1),
            rgba(88, 164, 176, 0.15) 1px,
            rgba(216, 219, 226, 0.2) 2px,
            rgba(88, 164, 176, 0.15) 3px,
            rgba(27, 27, 30, 0.1) 4px
          ),
          radial-gradient(
            circle at 0 100%,
            #022859,
            #373f51,
            #4754d4,
            #a9bcd0,
            #d8dbe2
          );
      }
    </style>
    <foreignObject width="100%" height="100%">
      <div xmlns="http://www.w3.org/1999/xhtml" class="front"></div>
    </foreignObject>
  </svg>
    `;
  return svg;
};
