// All icons are SVGs from Heroicons
// https://heroicons.com/
import { type IconProps, Svg } from "./Svg";

const createIcon = (name: string, iconJSX: React.ReactNode) => {
  const Icon = ({ vibe, size, backgroundVibe }: IconProps): React.ReactElement => (
    <Svg vibe={vibe} size={size} backgroundVibe={backgroundVibe}>
      {iconJSX}
    </Svg>
  );
  Icon.displayName = name;

  return Icon;
};

export const Rocket = createIcon(
  "Rocket",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  />,
);
export const AdjustmentsHorizontal = createIcon(
  "Rocket",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
  />,
);
export const Download = createIcon(
  "Download",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
  />,
);
export const ArrowRight = createIcon(
  "ArrowRight",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
  />,
);
export const Check = createIcon(
  "Check",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4.5 12.75l6 6 9-13.5"
  />,
);

export const XMark = createIcon(
  "XMark",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M6 18L18 6M6 6l12 12"
  />,
);
