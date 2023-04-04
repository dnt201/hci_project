import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Cart = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M18.928 1.071H17.58a2 2 0 0 0-1.95 1.554l-.924 4.039M1.462 7.428c.163 2.453.891 4.47 1.44 5.578.19.381.5.683.907.81.663.207 1.952.47 4.227.47 2.274 0 3.564-.263 4.226-.47.406-.127.717-.429.906-.81.623-1.255 1.475-3.678 1.475-6.577H2.428c-.552 0-1.003.448-.966 1Z"
      stroke="#6B7280"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.214 18.572a.714.714 0 1 0 0-1.43.714.714 0 0 0 0 1.43ZM12.5 18.572a.714.714 0 1 0 0-1.43.714.714 0 0 0 0 1.43Z"
      fill="#6B7280"
      stroke="#6B7280"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Cart;
