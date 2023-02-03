import { useState } from 'react';
import { SVGProps } from 'react';
import { ALinkMenuItem as ALink } from '@components/index';
const Bell = (props: SVGProps<SVGSVGElement>) => {
  return (
    <ALink hidden href={'/'} isExternal={false} replace>
      <svg
        width={28}
        height={28}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}
        {...props}
      >
        <path
          d="M17.5 19.833h5.833l-1.639-1.639A2.37 2.37 0 0 1 21 16.518v-3.685a7.003 7.003 0 0 0-4.667-6.601v-.399a2.333 2.333 0 0 0-4.666 0v.399A7.003 7.003 0 0 0 7 12.833v3.685a2.37 2.37 0 0 1-.694 1.676l-1.64 1.64H10.5m7 0V21a3.5 3.5 0 1 1-7 0v-1.167m7 0h-7"
          stroke="#525252"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {props.children}
      </svg>
    </ALink>
  );
};

const NotiCircle = () => {
  //임시로 true; default false
  const [isNoti, setNoti] = useState(false);
  return (
    <circle
      className={isNoti ? 'visibilty' : 'hidden'}
      cx={23}
      cy={4}
      r={2.5}
      fill="#EF4444"
    />
  );
};

const Noti = () => {
  return (
    <Bell>
      <NotiCircle />
    </Bell>
  );
};
export default Noti;
