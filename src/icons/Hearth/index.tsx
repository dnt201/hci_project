import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.66.99c-2.64-1.8-5.9-.96-7.66 1.1C9.24.03 5.98-.82 3.34.99 1.94 1.95 1.06 3.57 1 5.28c-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1C17.7 12.26 21.13 9.15 21 5.27c-.06-1.7-.94-3.32-2.34-4.28ZM11.1 15.55l-.1.1-.1-.1C6.14 11.24 3 8.39 3 5.5 3 3.5 4.5 2 6.5 2c1.54 0 3.04.99 3.57 2.36h1.87C12.46 2.99 13.96 2 15.5 2c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
