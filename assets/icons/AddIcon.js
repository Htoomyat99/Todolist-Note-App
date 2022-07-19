import * as React from 'react';
import Svg, {Defs, G, Circle, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style, title */

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    width={50}
    height={50}
    strokeWidth={1.7}>
    <Defs></Defs>
    <G id="_8.add" data-name="8.add">
      <Circle className="cls-1" cx={12} cy={12} r={11} stroke={props.inColor} />
      <Path className="cls-1" d="M12 6v12M18 12H6" stroke={props.outColor} />
    </G>
  </Svg>
);

export default SvgComponent;
