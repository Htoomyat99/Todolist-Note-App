import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const TrueIcon = props => (
  <Svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={22}
    height={22}
    {...props}>
    <Path
      d="m22.41 10.59-2.05-2.05V5.63a2 2 0 0 0-2-2h-2.9l-2.05-2a2 2 0 0 0-2.82 0L8.54 3.64H5.63a2 2 0 0 0-2 2v2.9l-2 2.05A2 2 0 0 0 1 12a2 2 0 0 0 .58 1.41l2.06 2.05v2.91a2 2 0 0 0 2 2h2.9l2.05 2.05A2 2 0 0 0 12 23a2 2 0 0 0 1.41-.58l2.05-2.06h2.91a2 2 0 0 0 2-2v-2.9l2.05-2.05a2 2 0 0 0 0-2.82Zm-4.05 4.05v3.72h-3.72L12 21l-2.64-2.64H5.64v-3.72L3 12l2.64-2.64V5.64h3.72L12 3l2.64 2.64h3.72v3.72L21 12Z"
      fill="#F4A600"
    />
    <Path
      d="m11 12.73-2.29-2.29-1.42 1.41L11 15.56l5.71-5.71-1.42-1.41L11 12.73z"
      fill="#F4A600"
    />
  </Svg>
);

export default TrueIcon;
