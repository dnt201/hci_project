import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const HouseFill = (props: SvgProps) => (
  <Svg width={20} height={21} {...props}>
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#252422"
      fillOpacity={1}
      d="M10 6.258 2.867 12.07c0 .008-.004.02-.008.035-.004.016-.004.028-.004.04v5.882c0 .211.079.399.235.551a.765.765 0 0 0 .558.235H8.41v-4.708h3.176v4.707h4.766a.765.765 0 0 0 .558-.234.748.748 0 0 0 .235-.55v-5.883a.171.171 0 0 0-.012-.075Zm0 0"
    />
    <Path
      stroke="none"
      fillRule="nonzero"
      fill="#252422"
      fillOpacity={1}
      d="m19.863 10.746-2.718-2.23V3.512a.38.38 0 0 0-.11-.282.389.389 0 0 0-.285-.109h-2.383a.383.383 0 0 0-.398.39v2.391l-3.028-2.5a1.461 1.461 0 0 0-.941-.32c-.363 0-.68.11-.941.32L.137 10.746a.369.369 0 0 0-.137.262.396.396 0 0 0 .09.289l.765.906a.428.428 0 0 0 .262.137c.102.008.2-.02.297-.086L10 5.18l8.586 7.074a.374.374 0 0 0 .258.086h.039a.439.439 0 0 0 .262-.137l.765-.906a.396.396 0 0 0 .09-.29.369.369 0 0 0-.137-.26Zm0 0"
    />
  </Svg>
);

export default HouseFill;
