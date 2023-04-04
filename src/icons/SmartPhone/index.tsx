import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SmartPhone = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99ZM17 19H7V5h10v14Z"
      fill="#252422"
    />
  </Svg>
);

export default SmartPhone;
