import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const Wallet = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#252422">
      <Path d="M15.833 2.5H4.167A4.172 4.172 0 0 0 0 6.667h20A4.171 4.171 0 0 0 15.833 2.5ZM0 13.334a4.172 4.172 0 0 0 4.167 4.167h11.666A4.172 4.172 0 0 0 20 13.334v-5H0v5Zm5.833-.417a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Wallet;
