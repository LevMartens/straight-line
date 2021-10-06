import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HelpSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={24}
      height={24}
      {...props}
    >
      <Path
        fill="#2196f3"
        d="M44 24c0 11.044-8.956 20-20 20S4 35.044 4 24 12.956 4 24 4s20 8.956 20 20z"
      />
      <Path
        fill="#e3f2fd"
        d="M23.758 31.145c-.727 0-1.328.234-1.797.711-.469.473-.703 1.074-.703 1.805 0 .719.23 1.313.688 1.781.461.469 1.063.703 1.816.703.75 0 1.352-.234 1.813-.703.457-.469.688-1.063.688-1.781 0-.73-.234-1.332-.703-1.805-.466-.469-1.08-.711-1.802-.711zm5.426-16.559C27.969 13.527 26.266 13 24.07 13c-2.176 0-3.895.559-5.152 1.672-1.191 1.055-1.824 2.504-1.902 4.328H17v1h4.5l.008-.703c.02-.824.262-1.473.723-1.941.457-.473 1.074-.707 1.84-.707 1.617 0 2.422.871 2.422 2.617a3.14 3.14 0 01-.465 1.648c-.309.52-.934 1.195-1.871 2.027-.938.828-1.582 1.672-1.934 2.527-.355.855-.531 2.086-.531 3.531h3.98l.063-1.023c.113-1.012.563-1.891 1.352-2.645l1.262-1.191c.98-.949 1.672-1.813 2.063-2.59a5.431 5.431 0 00.594-2.484c-.006-1.929-.611-3.421-1.822-4.48z"
      />
    </Svg>
  );
}

export default HelpSvgComponent;
