import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MarkerButtonSvgComponent({ svgColor }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      viewBox="0 0 50 50"
    >
      <Path
        d="M25 1C16.16 1 9 8.16 9 17c0 7.309 3.86 15.164 7.656 21.25 3.797 6.086 7.594 10.406 7.594 10.406.191.215.465.34.75.34s.559-.125.75-.34c0 0 3.8-4.41 7.594-10.531C37.137 32.004 41 24.168 41 17c0-8.84-7.16-16-16-16zm0 2c7.762 0 14 6.238 14 14 0 6.434-3.637 14.082-7.344 20.063-3.105 5.011-5.734 8.238-6.656 9.343-.93-1.097-3.559-4.254-6.656-9.218C14.64 31.25 11 23.59 11 17c0-7.762 6.238-14 14-14zm0 8c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z"
        fill={svgColor} //"#fc9c04" //"#fff"
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default MarkerButtonSvgComponent;
