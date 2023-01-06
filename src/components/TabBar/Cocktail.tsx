import * as React from 'react';
import { SVGProps } from 'react';
const SvgCocktail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 28h4m4 0h-4m0 0V17.333m0 0 9.333-8.666H6.667L16 17.333Zm2-6 2.666-8 4.667-.666"
      stroke={props.stroke}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCocktail;
