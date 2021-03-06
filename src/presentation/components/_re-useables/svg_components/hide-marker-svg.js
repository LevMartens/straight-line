import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HideMarkerSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      marginTop={2}
      marginLeft={3}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path
        d="M25 1c-6.105 0-11.402 3.45-14.094 8.492L5.707 4.293a1.005 1.005 0 00-1.645.32 1 1 0 00.231 1.094l7.297 7.297 6.601 6.605 5.2 5.2 9.75 9.742 1.48 1.484 9.672 9.672c.25.262.625.367.973.273a.99.99 0 00.714-.714.992.992 0 00-.273-.973L35.629 34.219C38.559 28.816 41 22.637 41 17c0-8.82-7.18-16-16-16zm0 2c7.719 0 14 6.281 14 14 0 5.043-2.18 10.684-4.86 15.723l-7.85-7.848C29.534 24.265 32 21.418 32 18c0-3.86-3.14-7-7-7-3.418 0-6.266 2.465-6.875 5.71l-5.746-5.745C14.637 6.258 19.44 3 25 3zm0 10c2.758 0 5 2.242 5 5s-2.242 5-5 5c-.215 0-.422-.016-.629-.043l-4.328-4.328A4.767 4.767 0 0120 18c0-2.758 2.242-5 5-5zm-15.633.61A16.159 16.159 0 009 17c0 14.113 14.625 30.95 15.25 31.656.188.219.46.344.75.344h.004c.289 0 .562-.129.754-.348.308-.359 4.09-4.785 7.808-10.843l-1.476-1.477a95.596 95.596 0 01-7.094 10.105C21.976 42.767 11 28.59 11 17c0-.559.043-1.11.105-1.652z"
        fill="#fff"
        className="prefix__color000 prefix__svgShape"
      />
    </Svg>
  );
}

export default HideMarkerSvgComponent;
