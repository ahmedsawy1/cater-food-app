import React from 'react';
import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Path,
  Rect,
  Svg,
  LinearGradient,
  Stop,
  Polygon,
} from 'react-native-svg';

import {Colors, PixelPerfect} from '../../styles/stylesConstants';

export const SearchIcon = ({color}: any) => (
  <Svg
    width={PixelPerfect(18)}
    height={PixelPerfect(18)}
    viewBox="0 0 15.581 15.581">
    <G id="search" transform="translate(1 1)">
      <Circle
        id="Oval"
        cx="5.486"
        cy="5.486"
        r="5.486"
        fill="none"
        stroke={color ? color : '#d58632'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <Path
        id="Shape"
        d="M3.8,3.8,0,0"
        transform="translate(9.363 9.363)"
        fill="none"
        stroke={color ? color : '#d58632'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </G>
  </Svg>
);

export const MenuIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path id="Mask" d="M0,12V10H18v2ZM0,7V5H18V7ZM0,2V0H18V2Z" />
      </ClipPath>
    </Defs>
    <G
      id="Top_Bar_Internal_menu"
      data-name="Top Bar / Internal menu"
      transform="translate(-350 -20)">
      <G id="icon_menu" data-name="icon/menu" transform="translate(350 20)">
        <G id="icon_menu-2" data-name="icon/menu" transform="translate(1 4)">
          <Path
            id="Mask-2"
            data-name="Mask"
            d="M0,12V10H18v2ZM0,7V5H18V7ZM0,2V0H18V2Z"
          />
          <G id="icon_menu-3" data-name="icon/menu" clipPath="url(#clip-path)">
            <G
              id="_Color"
              data-name="\uD83C\uDFA8 Color"
              transform="translate(-16 -19)">
              <Rect
                id="Colors_Sec1"
                data-name="Colors/Sec1"
                width={50}
                height={50}
                fill="#d58632"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export const LocationIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={8.167}
    height={11.667}
    viewBox="0 0 8.167 11.667"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M4.083,11.667h0C4.042,11.62,0,7.092,0,4.083a4.083,4.083,0,0,1,8.167,0c0,3.008-4.042,7.537-4.083,7.583Zm0-9.041A1.458,1.458,0,1,0,5.541,4.083,1.46,1.46,0,0,0,4.083,2.625Z"
          transform="translate(0.917 0.167)"
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G
      id="Icons_ic_adjust"
      data-name="Icons/ic_adjust"
      transform="translate(-0.917 -0.167)">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M4.083,11.667h0C4.042,11.62,0,7.092,0,4.083a4.083,4.083,0,0,1,8.167,0c0,3.008-4.042,7.537-4.083,7.583Zm0-9.041A1.458,1.458,0,1,0,5.541,4.083,1.46,1.46,0,0,0,4.083,2.625Z"
        transform="translate(0.917 0.167)"
        fill="none"
      />
      <G
        id="Icons_ic_adjust-2"
        data-name="Icons/ic_adjust"
        clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-9.583 -8.583)">
          <Rect
            id="Colors_Sec4"
            data-name="Colors/Sec4"
            width={29.167}
            height={29.167}
            fill="#f4f4f4"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const CalenderIcon = props => (
  <Svg
    id="Icons_calender"
    data-name="Icons/calender"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M9.333,11.667H1.166A1.168,1.168,0,0,1,0,10.5L.005,2.334A1.165,1.165,0,0,1,1.166,1.166H1.75V0H2.917V1.166H7.583V0H8.75V1.166h.583A1.169,1.169,0,0,1,10.5,2.334V10.5A1.168,1.168,0,0,1,9.333,11.667ZM1.166,4.083V10.5H9.333V4.083Zm7,2.334H7V5.25H8.167V6.416Zm-2.334,0H4.667V5.25H5.833V6.416Zm-2.333,0H2.334V5.25H3.5V6.416Z"
          transform="translate(0.75 0.167)"
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G id="Icons_ic_adjust" data-name="Icons/ic_adjust">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M9.333,11.667H1.166A1.168,1.168,0,0,1,0,10.5L.005,2.334A1.165,1.165,0,0,1,1.166,1.166H1.75V0H2.917V1.166H7.583V0H8.75V1.166h.583A1.169,1.169,0,0,1,10.5,2.334V10.5A1.168,1.168,0,0,1,9.333,11.667ZM1.166,4.083V10.5H9.333V4.083Zm7,2.334H7V5.25H8.167V6.416Zm-2.334,0H4.667V5.25H5.833V6.416Zm-2.333,0H2.334V5.25H3.5V6.416Z"
        transform="translate(0.75 0.167)"
        fill="none"
      />
      <G
        id="Icons_ic_adjust-2"
        data-name="Icons/ic_adjust"
        clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-8.583 -8.583)">
          <Rect
            id="Colors_Sec4"
            data-name="Colors/Sec4"
            width={29.167}
            height={29.167}
            fill="#f4f4f4"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const HourIcon = props => (
  <Svg
    id="Icons_time"
    data-name="Icons/time"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M5.828,11.667a5.833,5.833,0,1,1,5.839-5.834A5.837,5.837,0,0,1,5.828,11.667Zm.005-10.5A4.667,4.667,0,1,0,10.5,5.833,4.672,4.672,0,0,0,5.833,1.166Zm2.48,7.088h0L5.25,6.417v-3.5h.876V5.98L8.75,7.537l-.437.716Z"
          transform="translate(0.167 0.167)"
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G id="icons_ic_adjust_Copy" data-name="icons/ic_adjust Copy">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M5.828,11.667a5.833,5.833,0,1,1,5.839-5.834A5.837,5.837,0,0,1,5.828,11.667Zm.005-10.5A4.667,4.667,0,1,0,10.5,5.833,4.672,4.672,0,0,0,5.833,1.166Zm2.48,7.088h0L5.25,6.417v-3.5h.876V5.98L8.75,7.537l-.437.716Z"
        transform="translate(0.167 0.167)"
        fill="none"
      />
      <G
        id="icons_ic_adjust_Copy-2"
        data-name="icons/ic_adjust Copy"
        clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-8.583 -8.583)">
          <Rect
            id="Colors_Sec4"
            data-name="Colors/Sec4"
            width={29.167}
            height={29.167}
            fill="#f4f4f4"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const SortIcon2 = props => (
  <Svg
    id="icon_filter2"
    data-name="icon/filter2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={18}
    height={12}
    viewBox="0 0 18 12"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path id="Mask" d="M0,12V10H7v2ZM0,7V5H11V7ZM0,2V0H18V2Z" />
      </ClipPath>
    </Defs>
    <G id="icon_menu" data-name="icon/menu">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M0,12V10H7v2ZM0,7V5H11V7ZM0,2V0H18V2Z"
      />
      <G id="icon_menu-2" data-name="icon/menu" clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-16 -19)">
          <Rect
            id="Colors_Sec3"
            data-name="Colors/Sec3"
            width={50}
            height={50}
            fill="#1d252d"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const ArrowDownIcon = ({fill, ...props}) => (
  <Svg
    id="icon_arrow"
    data-name="icon/arrow"
    width={15}
    height={10}
    viewBox="0 0 15 10"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M13.238,0,7.5,5.725,1.762,0,0,1.762l7.5,7.5,7.5-7.5Z"
        />
      </ClipPath>
    </Defs>
    <G id="_Color" data-name="\uD83C\uDFA8 Color">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M13.238,0,7.5,5.725,1.762,0,0,1.762l7.5,7.5,7.5-7.5Z"
      />
      <G
        id="_Color-2"
        data-name="\uD83C\uDFA8 Color"
        clipPath="url(#clip-path)">
        <G
          id="_Color-3"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-6.25 -8.75)">
          <Rect
            id="Colors_Sec1"
            data-name="Colors/Sec1"
            width={27.5}
            height={27.5}
            fill={fill ? fill : '#d58632'}
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const XCloseIcon = props => (
  <Svg
    id="icon_close"
    data-name="icon/close"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={PixelPerfect(14)}
    height={PixelPerfect(14)}
    viewBox="0 0 14 14"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M9.8.987,8.813,0,4.9,3.913.987,0,0,.987,3.913,4.9,0,8.813.987,9.8,4.9,5.887,8.813,9.8,9.8,8.813,5.887,4.9Z"
        />
      </ClipPath>
    </Defs>
    <G
      id="_Color"
      data-name="\uD83C\uDFA8 Color"
      transform="translate(2.1 2.1)">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M9.8.987,8.813,0,4.9,3.913.987,0,0,.987,3.913,4.9,0,8.813.987,9.8,4.9,5.887,8.813,9.8,9.8,8.813,5.887,4.9Z"
      />
      <G
        id="_Color-2"
        data-name="\uD83C\uDFA8 Color"
        clipPath="url(#clip-path)">
        <G
          id="_Color-3"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-12.6 -12.6)">
          <Rect
            id="Colors_Sec1"
            data-name="Colors/Sec1"
            width={35}
            height={35}
            fill="#d58632"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const CartIcon = props => (
  <Svg
    id="icon_search"
    data-name="icon/search"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M12,16a2,2,0,1,1,2,2A2,2,0,0,1,12,16ZM3,16a2,2,0,1,1,2,2A2,2,0,0,1,3,16Zm2.4-2a1.871,1.871,0,0,1-1.575-2.772L5.038,8.951,1.8,1.867H0V0H2.942l.845,1.867H17.1a.93.93,0,0,1,.783,1.382L14.665,9.305a1.782,1.782,0,0,1-1.574.961h-6.7L5.4,12.133h10.8V14Z"
        />
      </ClipPath>
    </Defs>
    <G id="icon_search-2" data-name="icon/search">
      <G id="_Color" data-name="\uD83C\uDFA8 Color">
        <Path
          id="Mask-2"
          data-name="Mask"
          d="M12,16a2,2,0,1,1,2,2A2,2,0,0,1,12,16ZM3,16a2,2,0,1,1,2,2A2,2,0,0,1,3,16Zm2.4-2a1.871,1.871,0,0,1-1.575-2.772L5.038,8.951,1.8,1.867H0V0H2.942l.845,1.867H17.1a.93.93,0,0,1,.783,1.382L14.665,9.305a1.782,1.782,0,0,1-1.574.961h-6.7L5.4,12.133h10.8V14Z"
        />
        <G
          id="_Color-2"
          data-name="\uD83C\uDFA8 Color"
          clipPath="url(#clip-path)">
          <G
            id="_Color-3"
            data-name="\uD83C\uDFA8 Color"
            transform="translate(-16 -16)">
            <Rect
              id="Colors_Sec1"
              data-name="Colors/Sec1"
              width={50}
              height={50}
              fill="#d58632"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export const ArrowBackIcon = props => (
  <Svg
    id="icon_menu"
    data-name="icon/menu"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={8.233}
    height={18.462}
    viewBox="0 0 8.233 18.462"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M16.292,0,9.231,5.089,2.169,0,0,1.567,9.231,8.233l9.231-6.667Z"
          transform="translate(0 18.462) rotate(-90)"
        />
      </ClipPath>
    </Defs>
    <G id="icon_menu-2" data-name="icon/menu">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M16.292,0,9.231,5.089,2.169,0,0,1.567,9.231,8.233l9.231-6.667Z"
        transform="translate(0 18.462) rotate(-90)"
      />
      <G
        id="icon_menu-3"
        data-name="icon/menu"
        transform="translate(0)"
        clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-26.994 -31.854)">
          <Rect
            id="Colors_Sec1"
            data-name="Colors/Sec1"
            width={55.556}
            height={76.923}
            fill="#d58632"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const ArrowUpIcon = ({...props}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={11}
    height={7.333}
    viewBox="0 0 11 7.333"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M9.708,6.793,5.5,2.594l-4.207,4.2L0,5.5,5.5,0,11,5.5Z"
        />
      </ClipPath>
    </Defs>
    <G id="icon_arrow" data-name="icon/arrow" opacity={0.49}>
      <G id="_Color" data-name="\uD83C\uDFA8 Color">
        <Path
          id="Mask-2"
          data-name="Mask"
          d="M9.708,6.793,5.5,2.594l-4.207,4.2L0,5.5,5.5,0,11,5.5Z"
        />
        <G
          id="_Color-2"
          data-name="\uD83C\uDFA8 Color"
          clipPath="url(#clip-path)">
          <G
            id="_Color-3"
            data-name="\uD83C\uDFA8 Color"
            transform="translate(-4.583 -6.957)">
            <Rect
              id="Colors_Sec3"
              data-name="Colors/Sec3"
              width={20.167}
              height={20.167}
              fill="#1d252d"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export const SquareNotCheckedIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}>
    <G
      id="Checkbox"
      fill="none"
      stroke="#d7d8da"
      strokeMiterlimit={10}
      strokeWidth={1}>
      <Rect width={12} height={12} rx={2} stroke="none" />
      <Rect x={0.5} y={0.5} width={11} height={11} rx={1.5} fill="none" />
    </G>
  </Svg>
);

export const SquareCheckedIcon = props => (
  <Svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="47px"
    height="47px"
    viewBox="0 0 47 47"
    style={{
      enableBackground: 'new 0 0 47 47',
    }}
    xmlSpace="preserve"
    fill={Colors.mainColor}
    {...props}>
    <G>
      <Path d="M37.6,0H9.4C4.209,0,0,4.209,0,9.4v28.2C0,42.791,4.209,47,9.4,47h28.2c5.191,0,9.4-4.209,9.4-9.4V9.4 C47,4.209,42.791,0,37.6,0z M38.143,19.139L23.602,33.678c-0.803,0.805-1.854,1.205-2.906,1.205c-1.051,0-2.104-0.4-2.907-1.205 l-8.933-8.932c-1.604-1.604-1.604-4.208,0-5.814c1.607-1.606,4.209-1.606,5.816,0l6.023,6.023l11.633-11.633 c1.605-1.605,4.209-1.605,5.814,0C39.75,14.928,39.75,17.532,38.143,19.139z" />
    </G>
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);

export const TickIcon = props => (
  <Svg
    id="icon_check"
    data-name="icon/check"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={24}
    viewBox="0 0 32 24"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M29.18,0,12,17.16,2.82,8,0,10.82l12,12,20-20Z"
          transform="translate(0 0)"
        />
      </ClipPath>
    </Defs>
    <G id="_Color" data-name="\uD83C\uDFA8 Color" transform="translate(0 0)">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M29.18,0,12,17.16,2.82,8,0,10.82l12,12,20-20Z"
        transform="translate(0 0)"
      />
      <G
        id="_Color-2"
        data-name="\uD83C\uDFA8 Color"
        clipPath="url(#clip-path)">
        <G
          id="_Color-3"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-10 -6)">
          <Rect
            id="Colors_Sec1"
            data-name="Colors/Sec1"
            width={44}
            height={44}
            fill="#d58632"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const UserIcon = props => (
  <Svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 490.947 490.947"
    style={{
      enableBackground: 'new 0 0 490.947 490.947',
    }}
    xmlSpace="preserve"
    {...props}>
    <G>
      <G>
        <Path d="M153.373,220.015c5.3,9.1,12.1,17.8,20.4,25.1c8.2,7.3,17.9,13.2,28.2,16.8c11.7,4.3,22.9,4.5,30.4,3 c7.5-2,11.6-5.2,10.8-9.8c-1.4-8.6-15-13.8-30.2-21.3c-13.9-6.8-23.9-18.8-30.5-33.4c-6.7-14.6-10.1-31.4-12-48.5 c-0.8-6.9-1.2-13.9-1.3-20.9c-0.1-3.5-0.1-7,0-10.4l0.2-5.1l0.4-5.8l0.8-10c0.1-3.4,1.2-6.4,1.7-9.7l0.9-4.8l1.5-4.5 c1.1-3,1.7-6.2,3.3-8.8c5-11.4,13-20.9,23.4-27.6c10.3-6.9,23.2-10.8,36.2-12.1c11.7,0.7,23.6,3.3,33.8,7.8 c10.3,4.5,19,10.7,25.5,18.6c6.6,7.9,11,17.6,14,28.2c0.8,5.4,2.4,9.3,2.8,16.9l1,10.2c0.2,2.5,0.4,5.8,0.5,8.8 c0.7,24.8-2.1,50.6-11.3,71.5c-2.3,5.2-5,10-8.1,14.4c-3.1,4.3-6.6,8-10.5,11.3c-7.8,6.1-17.3,10.4-27.6,11.7 c-0.8,0.1-1.7,0.4-2.7,0.9s-1.8,1.2-3.3,1.9c-2.7,1.3-5.2,2.9-6.3,4.2c-4.5,5,2,9.2,11.2,11.3c7.6,1.8,16.2,1.8,25,0.2 c8.9-1.6,17.9-5.7,26-11.5c16.4-11.8,27.7-30.9,33.8-50.3c7.4-23.6,9.9-47.6,9.5-71.9c0-2.9-0.3-6.6-0.5-9.2l-0.6-8.5 c0-5.2-1.7-12.6-2.9-19.1c-0.5-3.4-1.7-6.5-2.7-9.7c-1.1-3.2-2-6.3-3.3-9.5c-3.1-6.1-5.7-12.4-10-18 c-7.8-11.5-18.5-21.5-30.7-28.2c-12.1-6.8-25.3-11.1-38.5-12.9c-6.6-1-13.3-1.4-19.8-1.3c-7,0.1-13.5,0.9-20.1,2.2 c-13.1,2.6-26.2,7.5-37.8,15.2c-11.8,7-22.7,16.5-30.4,28.2c-12.6,18.3-17.9,39.5-19.5,59.4l-0.4,3.8l-0.2,1.9 c-0.1,1,0.1-1.3,0.1-1.1v0.1v0.1v0.2l-0.1,0.5l-0.1,1.1c-0.2,2.6-0.4,5-0.5,7.5c-0.2,4.9-0.3,9.7-0.3,14.5 c0.1,9.7,0.8,19.3,2.2,29C137.473,182.015,142.773,201.715,153.373,220.015z" />
        <Path d="M456.073,382.915c-0.2-5.7-0.7-11.7-1.5-17.8c-1.7-12.2-5.3-25.4-13.3-37.8s-21.2-22.2-34.7-26.7l-0.2-0.1 c-0.4-0.1-0.9-0.3-1.3-0.4c-22.5-5.8-44.6-15.6-65-27.7c-4.9-2.8-14.2-4.6-17.8-4.1c-1.7,0.3-2.9,0.9-3.5,1.9s-0.6,2.3-0.2,3.8 c0.9,3.1,3.9,7.2,8.1,11.4c17.5,18,41.6,34.3,70.9,44.5l-0.9-0.3c11.8,5.6,18.9,15,22.3,28.5c2.8,10.1,3,22.1,2.8,34.3 c-0.2,6-0.6,12.2-1.2,18c-0.3,2.9-0.7,5.8-1.3,8.4c-0.1,0.4-0.1,0.7-0.2,1c-0.5,0.3-1,0.5-1.4,0.7c-2.3,1.1-4.5,2.3-6.8,3.3 c-4.6,2.2-9.4,4.1-14.1,6.1c-9.6,3.8-19.4,7.2-29.4,10.1c-19.9,5.9-40.4,10.2-61.1,13c-5.1,0.9-10.4,1.2-15.6,1.8 c-5.2,0.7-10.4,1-15.6,1.3s-10.4,0.8-15.7,0.8l-15.3,0.4c-10.9-0.2-22.1-0.2-32.1-0.9l-7.7-0.4l-7.8-0.7 c-5.2-0.5-10.5-0.8-15.7-1.6c-6.6-1.3-13.2-2.4-19.7-4.1l-9.8-2.3l-9.7-2.7c-13.4-3.8-26.6-8.1-39.4-13.4 c-6.4-2.6-12.7-5.4-18.8-8.3c-3-1.5-6.1-3-9-4.6c-0.5-0.3-0.9-0.5-1.4-0.8c-0.2-1.5-0.4-3-0.6-4.6c-0.5-4.5-0.7-9.4-0.9-14.3 c-0.3-9.6,0.1-19.8,1.1-28.3c1.1-8.7,3.4-16.2,6.8-21.7c3.5-5.4,7.9-9.1,14.4-11.8l-1.5,0.4c18.3-5.2,35.5-12.5,51.7-21.1 c23.5-12.5,39.3-29,32.4-35.4c-6.2-5.8-23.6-1.1-46.4,8.6c-15,6.4-30.5,11.5-46.1,14.9c-0.2,0-0.4,0.1-0.6,0.2l-0.6,0.2 c-8.9,2.9-17.8,7.8-25,14.8c-7.2,6.9-12.3,15.5-15.7,24c-3.4,8.6-5.2,17.2-6.2,25.5c-0.5,4.2-0.8,8.2-1,12.2l-0.2,5.7l-0.1,2.8 v3.3c0.1,6.7,0.3,13.4,1,20.3c0.3,3.5,0.7,6.9,1.4,10.7c0.7,3.8,1.4,7.5,3.3,12.5l0.1,0.2c1.2,3,3.2,5.6,6.2,7.4 c2.3,1.4,4,2.4,5.9,3.4c1.9,1.1,3.7,2,5.6,3c3.7,2,7.5,3.6,11.2,5.4c7.5,3.3,15.1,6.4,22.8,9.2c15.3,5.5,30.9,10.1,46.7,13.5 c7.9,1.9,15.8,3.1,23.8,4.7c8,1,15.9,2.5,24,3.2c8,0.8,16,1.6,24.2,1.9l12.2,0.6l11.7,0.1c-0.6-0.3-1.2-0.7-1.8-1 c0.6,0.3,1.2,0.7,1.8,1c17.5,2,35,2.2,52.7,1.7c17.6-1,35.4-2.7,53-6.2c17.6-3.4,35-7.9,52.1-13.9c8.5-3,17-6.3,25.4-10.1 c4.2-1.8,8.3-3.9,12.5-6c2.1-1.1,4.1-2.1,6.2-3.3c2.2-1.2,4-2.2,6.7-3.9l0.3-0.2c3.3-2.1,6-5.2,7.4-9.2c3.2-8.9,3.7-14.6,4.4-20.7 c0.6-6,0.9-11.7,1.1-17.4c0.1-2.8,0.1-5.6,0.1-8.6L456.073,382.915z" />
      </G>
    </G>
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);

export const CriditIcon = props => (
  <Svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 81.756 81.756"
    style={{
      enableBackground: 'new 0 0 81.756 81.756',
    }}
    xmlSpace="preserve"
    {...props}>
    <G>
      <Path d="M71.832,11.558H9.924C4.452,11.558,0,16.01,0,21.482v38.792c0,5.473,4.452,9.924,9.924,9.924h8.987 c1.993,0,3.609-1.615,3.609-3.608s-1.616-3.608-3.609-3.608H9.924c-1.493,0-2.707-1.215-2.707-2.707V37.341h67.321v22.934 c0,1.492-1.214,2.707-2.706,2.707H34.249c-1.993,0-3.609,1.615-3.609,3.608s1.616,3.608,3.609,3.608h37.583 c5.472,0,9.924-4.451,9.924-9.924V21.482C81.756,16.01,77.304,11.558,71.832,11.558z M7.218,26.959v-5.476 c0-1.492,1.214-2.707,2.707-2.707h61.908c1.493,0,2.706,1.215,2.706,2.707v5.476H7.218z" />
      <Path d="M63.569,58.033c0.997,0,1.804-0.809,1.804-1.805c0-0.996-0.808-1.805-1.804-1.805H45.074c-0.997,0-1.804,0.809-1.804,1.805 c0,0.996,0.808,1.805,1.804,1.805H63.569z" />
    </G>
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);

export const ExclamationIcon = props => (
  <Svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 27.963 27.963"
    style={{
      enableBackground: 'new 0 0 27.963 27.963',
    }}
    xmlSpace="preserve"
    width={PixelPerfect(16)}
    height={PixelPerfect(16)}
    fill={Colors.mainColor}
    {...props}>
    <G>
      <G id="c129_exclamation">
        <Path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984 C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548 c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z" />
        <Polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158  " />
        <Path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528 C16.441,19.575,15.468,18.546,13.998,18.546z" />
      </G>
      <G id="Capa_1_207_" />
    </G>
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
    <G />
  </Svg>
);

export const ColoredHourIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={PixelPerfect(13)}
    height={PixelPerfect(13)}
    viewBox="0 0 12.639 12.639"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M6.313,12.639a6.319,6.319,0,1,1,6.326-6.32A6.324,6.324,0,0,1,6.313,12.639ZM6.319,1.264a5.056,5.056,0,1,0,5.056,5.055A5.061,5.061,0,0,0,6.319,1.264ZM9.005,8.942H9L5.687,6.952V3.16h.949V6.478L9.479,8.165l-.473.776Z"
          transform="translate(0 0)"
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G
      id="icons_ic_adjust_Copy"
      data-name="icons/ic_adjust Copy"
      transform="translate(0 0)">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M6.313,12.639a6.319,6.319,0,1,1,6.326-6.32A6.324,6.324,0,0,1,6.313,12.639ZM6.319,1.264a5.056,5.056,0,1,0,5.056,5.055A5.061,5.061,0,0,0,6.319,1.264ZM9.005,8.942H9L5.687,6.952V3.16h.949V6.478L9.479,8.165l-.473.776Z"
        transform="translate(0 0)"
        fill="none"
      />
      <G
        id="icons_ic_adjust_Copy-2"
        data-name="icons/ic_adjust Copy"
        clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-9.479 -9.479)">
          <Rect
            id="Colors_Sec1"
            data-name="Colors/Sec1"
            width={31.597}
            height={31.597}
            fill="#d58632"
          />
        </G>
      </G>
    </G>
  </Svg>
);

export const TelegramIcon = props => (
  <Svg
    width={PixelPerfect(36)}
    height={PixelPerfect(36)}
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.5 1.5L0.5 6.5L4.5 8.5L10.5 4.5L6.5 9.5L12.5 13.5L14.5 1.5Z"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TrashIcon = props => (
  <Svg
    id="icon_delete"
    data-name="icon/delete"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M3,18a2.006,2.006,0,0,1-2-2V4H13V16a2.006,2.006,0,0,1-2,2ZM0,3V1H3.5l1-1h5l1,1H14V3Z"
        />
      </ClipPath>
    </Defs>
    <G id="_Color" data-name="\uD83C\uDFA8 Color" transform="translate(3 1)">
      <G id="_Color-2" data-name="\uD83C\uDFA8 Color">
        <Path
          id="Mask-2"
          data-name="Mask"
          d="M3,18a2.006,2.006,0,0,1-2-2V4H13V16a2.006,2.006,0,0,1-2,2ZM0,3V1H3.5l1-1h5l1,1H14V3Z"
        />
        <G
          id="_Color-3"
          data-name="\uD83C\uDFA8 Color"
          clipPath="url(#clip-path)">
          <G
            id="_Color-4"
            data-name="\uD83C\uDFA8 Color"
            transform="translate(-3 -1)">
            <Rect
              id="Colors_Sec2"
              data-name="Colors/Sec2"
              width={20.952}
              height={20.778}
              fill="#a58778"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export const PenIcon = props => (
  <Svg
    id="icon_edit"
    data-name="icon/edit"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M0,18V14.25L11.06,3.19l3.75,3.75L3.75,18ZM12.13,2.12,13.96.29a1,1,0,0,1,.7-.29.982.982,0,0,1,.71.29l2.34,2.34a1,1,0,0,1,0,1.41L15.88,5.87Z"
        />
      </ClipPath>
    </Defs>
    <G id="_Color" data-name="\uD83C\uDFA8 Color" transform="translate(1 1)">
      <G id="_Color-2" data-name="\uD83C\uDFA8 Color">
        <Path
          id="Mask-2"
          data-name="Mask"
          d="M0,18V14.25L11.06,3.19l3.75,3.75L3.75,18ZM12.13,2.12,13.96.29a1,1,0,0,1,.7-.29.982.982,0,0,1,.71.29l2.34,2.34a1,1,0,0,1,0,1.41L15.88,5.87Z"
        />
        <G
          id="_Color-3"
          data-name="\uD83C\uDFA8 Color"
          clipPath="url(#clip-path)">
          <G
            id="_Color-4"
            data-name="\uD83C\uDFA8 Color"
            transform="translate(-2 -1)">
            <Rect
              id="Colors_Sec2"
              data-name="Colors/Sec2"
              width={20.952}
              height={20.778}
              fill="#a58778"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export const MessageIcon = props => (
  <Svg
    id="icon_edit"
    data-name="icon/edit"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M16,16H5a1,1,0,0,1-1-1V13H17V4h2a1,1,0,0,1,1,1V20ZM0,1A1,1,0,0,1,1,0H14a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H4L0,15Z"
        />
      </ClipPath>
    </Defs>
    <G id="_Color" data-name="\uD83C\uDFA8 Color">
      <G id="_Color-2" data-name="\uD83C\uDFA8 Color">
        <G id="_Color-3" data-name="\uD83C\uDFA8 Color">
          <Path
            id="Mask-2"
            data-name="Mask"
            d="M16,16H5a1,1,0,0,1-1-1V13H17V4h2a1,1,0,0,1,1,1V20ZM0,1A1,1,0,0,1,1,0H14a1,1,0,0,1,1,1v9a1,1,0,0,1-1,1H4L0,15Z"
          />
          <G
            id="_Color-4"
            data-name="\uD83C\uDFA8 Color"
            clipPath="url(#clip-path)">
            <G
              id="_Color-5"
              data-name="\uD83C\uDFA8 Color"
              transform="translate(0 0)">
              <Rect
                id="Colors_Sec2"
                data-name="Colors/Sec2"
                width={20.952}
                height={20.778}
                fill="#a58778"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export const ArrowLeftIcon = props => (
  <Svg
    id="icon_edit"
    data-name="icon/edit"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Mask"
          d="M16.292,8.233,9.231,3.144,2.169,8.233,0,6.667,9.231,0l9.231,6.667Z"
          transform="translate(0 18.462) rotate(-90)"
        />
      </ClipPath>
    </Defs>
    <G id="icon_menu" data-name="icon/menu" transform="translate(11.439 1.085)">
      <Path
        id="Mask-2"
        data-name="Mask"
        d="M16.292,8.233,9.231,3.144,2.169,8.233,0,6.667,9.231,0l9.231,6.667Z"
        transform="translate(0 18.462) rotate(-90)"
      />
      <G id="icon_menu-2" data-name="icon/menu" clipPath="url(#clip-path)">
        <G
          id="_Color"
          data-name="\uD83C\uDFA8 Color"
          transform="translate(-20.328 -31.854)">
          <Rect
            id="Colors_Sec2"
            data-name="Colors/Sec2"
            width={55.556}
            height={76.923}
            fill="#a58778"
          />
        </G>
      </G>
    </G>
  </Svg>
);
