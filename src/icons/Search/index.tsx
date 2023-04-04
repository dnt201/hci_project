import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const NextArrow = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M12.917 11.667h-.659l-.233-.225a5.417 5.417 0 0 0 1.233-4.45c-.391-2.317-2.325-4.167-4.658-4.45A5.42 5.42 0 0 0 2.542 8.6c.283 2.333 2.133 4.267 4.45 4.658a5.417 5.417 0 0 0 4.45-1.233l.225.233v.659l3.541 3.541a.88.88 0 0 0 1.242 0 .88.88 0 0 0 0-1.241l-3.533-3.55Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"
      fill="#0D0229"
    />
  </Svg>
);

export default NextArrow;
