import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

function LogoSvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      viewBox="0 0 375 375"
      height={100}
      marginTop={50}
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path d="M38.398 38.434h307.48v307.445H38.399zm0 0" />
        </ClipPath>
        <ClipPath id="prefix__b">
          <Path d="M173.734 138.8h32.25V186h-32.25zm0 0" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path
          fill="#FFF"
          d="M335.52 237.637l-53.555-24h-1.715l-.133.133-28.894 29.023-75.504-61.156h-.063l-.199-.133h-1.984l-46.875 52.96-40-21.62h-1.653l-.132.133h-.133l-33.653 31.468a149.713 149.713 0 01-9.32-52.297 152.119 152.119 0 011.453-21.156l59.172-33.254 23.738 15.469.461.2h.461a1.62 1.62 0 00.926-.333l69.227-49.914 74.972 54.942c.305.226.676.343 1.059.328h.394l40.993-11.305 25.453 17.387a151.136 151.136 0 01-4.496 73.058zm-5.754 15.207l-12.23-10.051-25.653-21.09 37.222 16.66 5.422 2.446a202.006 202.006 0 01-4.761 12.035zm-15.668 27.304l-26.18-31.734a1.65 1.65 0 00-1.059-.598l-31.933-3.898 26.445-26.578 30.082 24.726 16.86 13.883a150.426 150.426 0 01-14.215 24.2zm-38.875 37.356l-28.164-47.734-.133-.2-61.024-75.437 64.395 52.297.332.199h.066l.395.129 34.648 4.168 26.309 31.867a150.594 150.594 0 01-36.824 34.71zm-83.106 25.058A150.487 150.487 0 0179.79 292.185l61.29-68.961 33.585-37.75 69.617 86.078 28.164 47.738a149.887 149.887 0 01-80.328 23.274zm-129.652-74.18l24.133-51.835 37.75 20.492-46.743 52.629a151.779 151.779 0 01-15.14-21.285zm14.812-43.902l3.438-3.238-20.297 43.633a149.41 149.41 0 01-8.066-17.125zm114.84-182.742c70.742 0 131.899 49.387 146.906 118.078l-23.273-15.93a1.643 1.643 0 00-1.387-.198l-40.925 11.304-75.239-55.074-.46-.266h-.532l-.727.2-.199.132-69.355 49.852-23.602-15.406-.394-.2h-.465a1.688 1.688 0 00-.86.2L43.82 166.828c12.168-71.535 75.309-125.09 148.297-125.09zm151.004 121.453C329.305 90.926 265.836 38.434 192.117 38.434c-76.234.004-140.949 55.882-152.062 131.3a155.97 155.97 0 00-1.657 22.414 153.346 153.346 0 0037.95 101.09c55.828 63.961 152.93 70.559 216.89 14.735 41.196-35.957 60.188-91.082 49.883-144.782"
        />
      </G>
      <Path
        fill="#FFF"
        d="M171.855 340.094v-11.262c0-.25.047-.488.141-.719.098-.23.23-.433.406-.61a1.885 1.885 0 011.328-.547 1.9 1.9 0 01.72.142c.226.097.429.23.605.406.175.176.312.379.406.61.098.23.144.468.144.718v11.262c0 .25-.046.488-.144.719-.094.23-.23.433-.406.609a1.856 1.856 0 01-.606.406c-.23.098-.472.145-.719.145-.25 0-.488-.047-.718-.145a1.832 1.832 0 01-.61-.406 1.893 1.893 0 01-.406-.61 1.885 1.885 0 01-.14-.718zm0-18.77v-11.262c0-.25.047-.488.141-.718.098-.23.23-.434.406-.61.176-.175.38-.312.61-.406.23-.098.468-.144.718-.144a1.856 1.856 0 011.324.55c.176.176.313.38.407.61.098.23.144.469.144.719v11.261c0 .25-.046.488-.144.719-.094.23-.23.434-.406.61a1.856 1.856 0 01-.606.406c-.23.093-.472.144-.719.144a1.889 1.889 0 01-1.734-1.16 1.885 1.885 0 01-.14-.719zm0-18.77V291.29a1.9 1.9 0 01.141-.719c.098-.226.23-.43.406-.605a1.843 1.843 0 011.328-.55 1.9 1.9 0 01.72.14c.226.097.429.23.605.41.175.176.312.379.406.605.098.23.144.473.144.72v11.265c0 .246-.046.488-.144.715-.094.23-.23.433-.406.609a1.931 1.931 0 01-.606.41 1.9 1.9 0 01-1.437 0 1.904 1.904 0 01-1.016-1.02 1.866 1.866 0 01-.14-.714zm0-18.773V272.52c0-.25.047-.489.141-.72.098-.23.23-.433.406-.609a1.889 1.889 0 011.328-.55 1.856 1.856 0 011.324.55c.176.176.313.38.407.61.098.23.144.469.144.719v11.261c0 .25-.046.489-.144.719-.094.23-.23.434-.406.61a1.856 1.856 0 01-.606.406c-.23.097-.472.144-.719.144-.25 0-.488-.047-.718-.144a1.832 1.832 0 01-.61-.407 1.893 1.893 0 01-.406-.609 1.885 1.885 0 01-.14-.719zm0-18.77V253.75a1.87 1.87 0 012.594-1.734c.227.093.43.23.606.406.175.176.312.379.406.61.098.226.144.468.144.718v11.262c0 .246-.046.488-.144.718a1.872 1.872 0 01-3.059.61 1.936 1.936 0 01-.406-.61 1.9 1.9 0 01-.14-.718zm0-18.773v-11.261c0-.25.047-.489.141-.72.098-.23.23-.433.406-.609a1.885 1.885 0 011.328-.547 1.9 1.9 0 01.72.141c.226.098.429.23.605.406.175.176.312.38.406.61.098.23.144.469.144.719v11.261c0 .25-.046.489-.144.719-.094.23-.23.434-.406.61a1.856 1.856 0 01-.606.406c-.23.097-.472.144-.719.144-.25 0-.488-.047-.718-.144a1.832 1.832 0 01-.61-.407 1.893 1.893 0 01-.406-.609 1.885 1.885 0 01-.14-.719zm0-18.77v-11.261c0-.25.047-.488.141-.719.098-.23.23-.433.406-.61.176-.175.38-.312.61-.405.23-.098.468-.145.718-.145.247 0 .489.047.72.145.226.093.429.23.605.406.175.176.312.379.406.61.098.23.144.468.144.718v11.262c0 .25-.046.488-.144.719-.094.23-.23.433-.406.609a1.856 1.856 0 01-1.325.547c-.25 0-.488-.047-.718-.14a1.832 1.832 0 01-.61-.407 1.893 1.893 0 01-.406-.61 1.885 1.885 0 01-.14-.718zm0-18.769v-11.265a1.9 1.9 0 01.141-.72c.098-.23.23-.429.406-.609a1.885 1.885 0 011.328-.547 1.9 1.9 0 01.72.141 1.872 1.872 0 011.012 1.016c.097.23.143.472.143.719v11.265c0 .246-.046.488-.144.715-.094.23-.23.434-.406.61a1.856 1.856 0 01-.606.406c-.23.097-.472.144-.719.144-.25 0-.488-.047-.718-.144a1.832 1.832 0 01-.61-.407 1.866 1.866 0 01-.547-1.324zm0-18.773v-2.086a1.9 1.9 0 01.141-.719 1.904 1.904 0 011.016-1.016 1.9 1.9 0 011.438 0c.226.098.429.235.605.41.175.176.312.38.406.606.098.23.144.473.144.719v2.086c0 .25-.046.488-.144.719-.094.23-.23.433-.406.609a1.856 1.856 0 01-.606.406c-.23.094-.472.145-.719.145a1.889 1.889 0 01-1.734-1.16 1.885 1.885 0 01-.14-.72zm0 0"
      />
      <G clipPath="url(#prefix__b)">
        <Path
          fill="#FFF"
          d="M204.672 138.758c.84 0 1.25 1.008.664 1.601l-8.711 8.73 8.71 8.727c.587.598.177 1.606-.663 1.606h-29.063v25.36a.938.938 0 01-1.875 0v-45.087c0-.52.418-.937.938-.937zm-29.063 18.785h26.786l-7.762-7.79a.95.95 0 010-1.331l7.762-7.79h-26.786zm0 0"
        />
      </G>
    </Svg>
  );
}

export default LogoSvgComponent;

// import * as React from "react";
// import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

// function LogoSvgComponent(props) {
//   return (
//     <Svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={160}
//       viewBox="0 0 375 375"
//       height={160}
//       {...props}
//     >
//       <Defs>
//         <ClipPath id="prefix__a">
//           <Path d="M38.398 140.336h307.5v103.5h-307.5zm0 0" />
//         </ClipPath>
//       </Defs>
//       <G clipPath="url(#prefix__a)">
//         <Path
//           fill="#FFF"
//           d="M232.984 240.02l53.403-51.18 53.09 51.18H232.918zm-38.097-78.25l52.715 47.855.253.188h.063l.25.125h1.379l.254-.125h.062l.25-.188 5.961-5.34.442-.312.25-.317 23.28-20.847 3.704 3.515-56.164 53.758h-104.11zm-70.785-2.008l5.144 4.144 28.305 22.735.25.187h1.629l.191-.125h.125l.25-.25 19.516-19.535 9.98-9.984 2.57 2.324-73.671 80.824H56.199zm-5.961-4.774l3.074 2.45-69.848 82.644h-6.965zm30.937-10.297l26.356 21.098-16.88 16.895-25.417-20.41zm82.774 37.426l20.52 20.473-3.575 3.203-21.211-19.406zm12.3-12.308l21.149 21.164-5.207 4.644-5.024 4.524-20.644-20.66zm101.223 70.84l-64.012-61.735a1.881 1.881 0 00-2.508-.062l-10.73 9.609-22.59-22.61a1.886 1.886 0 00-2.64 0L224.762 184l-28.805-26.188-5.273-4.769a1.875 1.875 0 00-2.57.062l-10.044 10.047-28.05-22.418a1.883 1.883 0 00-2.512.188l-17.32 19.027-11.168-8.98a1.88 1.88 0 00-2.575.25L38.88 240.71a1.888 1.888 0 00.148 2.66c.356.32.82.488 1.293.477H344.06a1.88 1.88 0 001.316-3.2"
//         />
//       </G>
//     </Svg>
//   );
// }

// export default LogoSvgComponent;

// import * as React from "react";
// import Svg, { Path } from "react-native-svg";

// function LogoSvgComponent(props) {
//   return (
//     <Svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={100}
//       viewBox="0 0 375 375"
//       height={100}
//       {...props}
//     >
//       <Path
//         fill="#FFF"
//         d="M305.621 201.328a7.85 7.85 0 00-8.992-1.148l-34.422 18.43-58.684-73.774a7.814 7.814 0 00-5.68-2.938c-2.222-.168-4.405.696-5.988 2.274l-67.214 66.984-14.582-12.922a7.85 7.85 0 00-10.668.266l-84.98 83.219c-3.095 3.02-3.126 7.98-.118 11.062a7.819 7.819 0 005.594 2.344c1.98 0 3.949-.742 5.476-2.234l79.758-78.114 70 62c3.238 2.868 8.184 2.578 11.04-.66 2.862-3.23 2.566-8.172-.665-11.043l-49.133-43.515 60.344-60.13 103.488 130.098c1.535 1.942 3.813 2.95 6.13 2.95a7.745 7.745 0 004.85-1.696c3.395-2.699 3.95-7.62 1.25-10.992l-40.343-50.719 27.004-14.465 59.781 55.125a7.733 7.733 0 005.305 2.075c2.121 0 4.21-.84 5.75-2.512 2.926-3.176 2.73-8.129-.461-11.055zm0 0"
//       />
//       <Path
//         strokeLinecap="round"
//         transform="matrix(0 -10.49921 10.25954 0 198.24 296.888)"
//         fill="none"
//         d="M.5 0h13.93"
//         stroke="#FFF"
//       />
//     </Svg>
//   );
// }

// export default LogoSvgComponent;

// import * as React from "react";
// import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

// function LogoSvgComponent(props) {
//   return (
//     <Svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={100}
//       viewBox="0 0 375 375"
//       height={100}
//       {...props}
//     >
//       <Defs>
//         <ClipPath id="prefix__a">
//           <Path d="M192.215 59.332h2.547v51.711h-2.547zm0 0" />
//         </ClipPath>
//         <ClipPath id="prefix__b">
//           <Path d="M196.32 63.117h31.887v24.41H196.32zm0 0" />
//         </ClipPath>
//       </Defs>
//       <Path
//         d="M298.965 170.832a7.667 7.667 0 00-8.785-1.125l-33.637 17.992-57.344-72.012a7.654 7.654 0 00-5.554-2.87c-2.168-.16-4.305.68-5.848 2.222l-65.68 65.383-14.254-12.613c-3.004-2.653-7.547-2.536-10.422.257l-83.043 81.235c-3.02 2.945-3.05 7.785-.113 10.797a7.635 7.635 0 005.465 2.289 7.622 7.622 0 005.352-2.184l77.937-76.246 68.402 60.516c3.164 2.804 8 2.52 10.79-.641 2.796-3.152 2.507-7.977-.649-10.781l-48.012-42.477 58.97-58.691 101.124 126.992c1.5 1.895 3.723 2.879 5.988 2.879a7.564 7.564 0 004.739-1.656c3.32-2.637 3.863-7.438 1.226-10.73l-39.426-49.509 26.387-14.117 58.418 53.809a7.572 7.572 0 005.184 2.023c2.07 0 4.113-.82 5.62-2.453a7.616 7.616 0 00-.452-10.789zm0 0"
//         fill="#fff"
//       />
//       <Path
//         d="M.5 0h13.58"
//         transform="matrix(0 -10.49357 10.5 0 194.16 264.186)"
//         fill="none"
//         strokeLinecap="round"
//         stroke="#fff"
//       />
//       <G clipPath="url(#prefix__a)">
//         <Path
//           d="M194.625 60.523v49.325c0 .66-.543 1.195-1.207 1.195a1.2 1.2 0 01-1.203-1.195V60.523c0-.66.539-1.191 1.203-1.191a1.2 1.2 0 011.207 1.191"
//           fillRule="evenodd"
//           fill="#fff"
//         />
//       </G>
//       <G clipPath="url(#prefix__b)">
//         <Path
//           d="M228.207 63.96V83.97a.785.785 0 01-.363.676c-2.887 1.87-6.91 2.82-12.094 2.824-5.082.004-11.293-.89-18.66-2.703a.8.8 0 01-.668-.786V63.973c0-.067.008-.137.023-.207a.807.807 0 01.977-.578h-.004c7.273 1.792 13.375 2.68 18.332 2.675 4.84-.008 8.563-.86 11.188-2.55a.794.794 0 01.464-.149.8.8 0 01.805.797"
//           fill="#fff"
//         />
//       </G>
//     </Svg>
//   );
// }

// export default LogoSvgComponent;