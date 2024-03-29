import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Note = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={props.width}
    height={props.height}
    style={{
      enableBackground: 'new 0 0 50 50',
    }}
    xmlSpace="preserve"
    {...props}>
    <Path
      d="M8.793 14h22v2h-22zM8.793 20h22v2h-22zM8.793 26h17v2h-17zM8.793 32h12v2h-12zM8.793 38h12v2h-12z"
      fill={props.outColor}
    />
    <Path
      d="M38.793 18.586v-10L31.207 1H.793v48h38V31.414L49.207 21l-6.414-6.414-4 4zm-1 3.828L41.379 26l-12 12h-3.586v-3.586l12-12zm-6-18L35.379 8h-3.586V4.414zm5 42.586h-34V3h27v7h7v10.586l-13 13V40h6.414l6.586-6.586V47zm6-22.414L39.207 21l3.586-3.586L46.379 21l-3.586 3.586z"
      fill={props.inColor}
    />
  </Svg>
);

export default Note;
