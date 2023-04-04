import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CouponCard = (props: SvgProps) => (
  <Svg width={20} height={21} fill="none" {...props}>
    <Path
      d="M12.857 1.377a1.76 1.76 0 0 0-2.486 0L2.835 8.913a.586.586 0 0 0 0 .829l1.657 1.657a.586.586 0 1 1-.828.829L2.006 10.57a.586.586 0 0 0-.828 0l-.664.664a1.76 1.76 0 0 0 0 2.486l6.63 6.63a1.76 1.76 0 0 0 2.485 0l.664-.664a.586.586 0 0 0 0-.83L8.636 17.2a.586.586 0 1 1 .828-.83l1.657 1.658c.23.23.6.23.83 0l7.535-7.536a1.76 1.76 0 0 0 0-2.486l-6.63-6.629Zm-5.05 14.165a.586.586 0 0 1-.829 0l-1.657-1.657a.586.586 0 1 1 .829-.829l1.657 1.658c.229.229.229.6 0 .828Zm1.735-5.05a1.76 1.76 0 0 1-2.486 0 1.76 1.76 0 0 1 0-2.485 1.76 1.76 0 0 1 2.486 0 1.76 1.76 0 0 1 0 2.485Zm3.015 3.475a.585.585 0 0 1-.689-.46l-1.657-8.286a.586.586 0 1 1 1.15-.23l1.656 8.287a.586.586 0 0 1-.46.69Zm3.614-3.475a1.76 1.76 0 0 1-2.486 0 1.76 1.76 0 0 1 0-2.485 1.76 1.76 0 0 1 2.486 0 1.76 1.76 0 0 1 0 2.485Z"
      fill={props.color || "#FFC107"}
    />
  </Svg>
);

export default CouponCard;
