import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Edit = (props: SvgProps) => (
  <Svg width={20} height={20} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#252422"
      fillOpacity={1}
      d="M12.172 4.738 0 16.91V20h3.09L15.262 7.828ZM19.36.64a2.18 2.18 0 0 0-3.09 0l-2.918 2.922 3.09 3.09 2.917-2.918a2.185 2.185 0 0 0 0-3.093Zm0 0"
    />
  </Svg>
);

export default Edit;
