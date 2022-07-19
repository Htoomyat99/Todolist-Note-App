import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const TodoIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}
    width={props.width}
    height={props.height}>
    <Path
      d="m17.8 18.1-7.4 7.3-4.2-4.1L4 23.5l6.4 6.4 9.6-9.6zM17.8 5.1l-7.4 7.3-4.2-4.1L4 10.5l6.4 6.4L20 7.3zM17.8 31.1l-7.4 7.3-4.2-4.1L4 36.5l6.4 6.4 9.6-9.6z"
      fill={props.inColor}
    />
    <Path
      d="M24 22h20v4H24zM24 9h20v4H24zM24 35h20v4H24z"
      fill={props.outColor}
    />
  </Svg>
);

export default TodoIcon;
