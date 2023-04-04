import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg
    width={12}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6 .5A5.801 5.801 0 0 0 .205 6.295c0 3.965 5.186 9.786 5.406 10.032.208.23.57.23.777 0 .22-.246 5.406-6.067 5.406-10.032C11.794 3.099 9.194.5 6 .5Zm0 8.71a2.919 2.919 0 0 1-2.916-2.915A2.919 2.919 0 0 1 6 3.379a2.919 2.919 0 0 1 2.915 2.916A2.919 2.919 0 0 1 6 9.21Z"
      fill="#FFC107"
    />
  </Svg>
);

export default SvgComponent;
