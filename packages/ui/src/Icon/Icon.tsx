// All icons are SVGs from Heroicons
// https://heroicons.com/
import { type IconProps, Svg } from "./Svg";

const createIcon = (name: string, iconJSX: React.ReactNode) => {
  const Icon = ({
    vibe,
    size,
    backgroundVibe,
  }: IconProps): React.ReactElement => (
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
export const ThumbsUp = createIcon(
  "ThumbsUp",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
  />,
);
export const ChevronDown = createIcon(
  "ChevronDown",
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
  />,
);
