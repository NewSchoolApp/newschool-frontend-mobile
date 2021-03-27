import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

function BellHomeActive(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);">
      <Path
        d="M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16zm-6.01 6c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zM6.77 4.73c.42-.38.43-1.03.03-1.43a1 1 0 0 0-1.39-.02a10.424 10.424 0 0 0-3.27 6.06c-.09.61.38 1.16 1 1.16c.48 0 .9-.35.98-.83a8.44 8.44 0 0 1 2.65-4.94zM18.6 3.28c-.4-.37-1.02-.36-1.4.02c-.4.4-.38 1.04.03 1.42c1.38 1.27 2.35 3 2.65 4.94c.07.48.49.83.98.83c.61 0 1.09-.55.99-1.16c-.38-2.37-1.55-4.48-3.25-6.05z"
        fill="rgb(104,0,201)"
      />
      <Rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
    </Svg>
  );
}

export default BellHomeActive;
