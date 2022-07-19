import * as React from 'react';
import Svg, {SvgProps, Defs, G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const DeleteIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 58.67" {...props}>
    <Defs></Defs>
    <G id="Layer_2" data-name="Layer 2">
      <G id="Layer_1-2" data-name="Layer 1">
        <Path
          fill={props.inColor}
          className="cls-1"
          d="M61.33 5.33H48V2.67A2.66 2.66 0 0 0 45.33 0H18.67A2.66 2.66 0 0 0 16 2.67v2.66H2.67a2.67 2.67 0 0 0 0 5.34H8v40a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-40h5.33a2.67 2.67 0 1 0 0-5.34ZM50.67 50.67A2.67 2.67 0 0 1 48 53.33H16a2.67 2.67 0 0 1-2.67-2.66v-40h37.34Z"
        />
        <Path
          fill={props.outColor}
          className="cls-1"
          d="M24 45.33a2.67 2.67 0 0 0 2.67-2.66V21.33a2.67 2.67 0 0 0-5.34 0v21.34A2.67 2.67 0 0 0 24 45.33ZM40 45.33a2.67 2.67 0 0 0 2.67-2.66V21.33a2.67 2.67 0 0 0-5.34 0v21.34A2.67 2.67 0 0 0 40 45.33Z"
        />
      </G>
    </G>
  </Svg>
);

export default DeleteIcon;
