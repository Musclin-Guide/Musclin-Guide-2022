import * as React from 'react';
import { SVGProps } from 'react';
import { ALinkMenuItem as ALink } from '@components/index';
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <ALink href={'/'} isExternal={false} replace>
    <svg
      width={140}
      height={42}
      viewBox="0 10 360 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#F97316" clipPath="url(#logo_svg__a)">
        <path d="M119.879 88.52h-6.77V58.98h9.23l3.82 19.03 3.96-19.03h8.93v29.54h-6.76v-16.1l-3.48 16.1h-5.24l-3.69-16.1v16.1Zm33.563-29.54h7.14v23.37c0 2.37-.86 4.1-2.59 5.19-1.72 1.09-4 1.64-6.82 1.64-2.82 0-5.09-.55-6.82-1.64-1.72-1.1-2.59-2.83-2.59-5.19V58.98h7.14v22.28c0 .64.21 1.12.63 1.46.42.34.96.51 1.64.51.68 0 1.22-.17 1.64-.51.42-.34.62-.83.62-1.46V58.98h.01Zm16.496 8.15c0 .42.12.76.36 1.04.24.27.65.55 1.25.84.6.29 1.54.67 2.83 1.15 2.32.88 4 1.7 5.02 2.46 1.03.77 1.69 1.62 1.98 2.55.29.93.44 2.29.44 4.09v3.09c0 2.37-.89 4.1-2.66 5.19-1.77 1.09-4.08 1.64-6.92 1.64s-5.09-.55-6.82-1.64c-1.73-1.1-2.59-2.83-2.59-5.19v-4.3h7v3.35c0 .61.24 1.1.71 1.45.47.35 1.06.53 1.76.53s1.29-.17 1.78-.53c.48-.35.73-.83.73-1.45v-.82c0-1.07-.11-1.88-.32-2.42-.21-.54-.63-.99-1.24-1.35-.61-.36-1.62-.79-3.04-1.3-1.98-.68-3.5-1.37-4.53-2.09-1.04-.71-1.75-1.52-2.15-2.42-.39-.9-.59-2.03-.59-3.38v-2.46c0-2.37.86-4.1 2.59-5.19 1.72-1.09 4-1.64 6.82-1.64 2.82 0 5.09.55 6.82 1.64 1.72 1.1 2.59 2.83 2.59 5.19v2.99h-7v-2.07c0-.61-.23-1.1-.68-1.45-.45-.35-1.03-.53-1.73-.53-.74 0-1.33.15-1.76.44-.43.29-.64.75-.64 1.36v1.22l-.01.01Zm25.813 10.78h7.27v4.44c0 2.37-.85 4.1-2.55 5.19-1.7 1.09-3.95 1.64-6.75 1.64s-5.15-.55-6.92-1.64c-1.77-1.1-2.66-2.83-2.66-5.19V65.16c0-2.37.86-4.1 2.59-5.19 1.73-1.09 4-1.64 6.82-1.64 2.82 0 5.1.55 6.85 1.64 1.75 1.1 2.62 2.83 2.62 5.19v3.38h-7.1v-2.3c0-.61-.23-1.1-.68-1.45-.45-.35-1.02-.53-1.69-.53-.67 0-1.23.18-1.66.53-.43.35-.64.83-.64 1.45v15.02c0 .61.21 1.1.64 1.45.43.35.98.53 1.66.53.68 0 1.21-.17 1.61-.51.39-.34.59-.83.59-1.46v-3.36ZM212.6 58.98v23.3h9.34v6.24h-16.78V58.98h7.44Zm10.849 0h7.44v29.54h-7.44V58.98Zm22.361 0h6.76v29.54h-6.76l-5.45-14.95v14.95h-6.77V58.98h6.77l5.45 15.08V58.98Zm29.36 19.09v-5.42h9.23v9.69c0 2.37-.86 4.1-2.59 5.19-1.72 1.09-4 1.64-6.82 1.64-2.82 0-5.15-.55-6.92-1.64-1.77-1.1-2.66-2.83-2.66-5.19V65.15c0-2.37.86-4.1 2.59-5.19 1.73-1.09 4-1.64 6.82-1.64 2.82 0 5.09.55 6.82 1.64 1.73 1.1 2.59 2.83 2.59 5.19v3.38h-7.1v-2.3c0-.61-.21-1.1-.64-1.45-.43-.35-.98-.53-1.66-.53-.68 0-1.23.18-1.66.53-.43.35-.64.83-.64 1.45v15.02c0 .61.24 1.1.71 1.45.47.35 1.06.53 1.76.53s1.29-.17 1.76-.53.71-.83.71-1.45v-3.19h-2.3v.01Zm23.272-19.09h7.14v23.37c0 2.37-.86 4.1-2.59 5.19-1.72 1.09-4 1.64-6.82 1.64-2.82 0-5.09-.55-6.82-1.64-1.72-1.1-2.59-2.83-2.59-5.19V58.98h7.14v22.28c0 .64.21 1.12.63 1.46.42.34.96.51 1.64.51.68 0 1.22-.17 1.64-.51.42-.34.62-.83.62-1.46V58.98h.01Zm9.847 0h7.44v29.54h-7.44V58.98Zm28.951 22.97c0 4.38-2.26 6.57-6.77 6.57h-12.04V58.98h12.04c4.51 0 6.77 2.19 6.77 6.57v16.4Zm-6.93-14.62c0-.77-.15-1.34-.46-1.71-.3-.37-.84-.56-1.61-.56h-2.71v17.42h2.71c.77 0 1.3-.19 1.61-.56.3-.37.46-.94.46-1.71V67.33Zm26.58 21.19h-17.12V58.98h16.78v6.08h-9.67v5.59h9.34v5.75h-9.34v6.05h10.01v6.08-.01ZM41.938 91.34c.09 0 .19 0 .28-.03h1c16.82 0 28.03-4.52 34.47-8.33a1.485 1.485 0 0 0-.75-2.77c-.27 0-.53.07-.76.21-6.13 3.61-16.83 7.92-33.03 7.92h-.41c-1.04 0-1.72 0-2.14.86-.25.51-.18 1.13.17 1.58.29.36.71.56 1.17.56Zm.1-.22s.09 0 .14-.01h.02-.02s-.09 0-.14.01Zm.73-.01h-.37.37c.64 0 1.25-.01 1.87-.02-.47 0-.93.02-1.42.02h-.45Zm34.82-8.3c.11-.07.21-.15.29-.24-.08.09-.18.18-.29.24Zm-31.49 8.25c.54-.02 1.06-.05 1.59-.07-.53.03-1.05.06-1.59.07Zm2.97-.14c.52-.03 1.02-.08 1.52-.12-.51.04-1 .09-1.52.12Zm2.84-.24c.5-.05.97-.11 1.46-.17-.48.06-.96.12-1.46.17Zm2.71-.32c.48-.06.93-.14 1.4-.21-.46.07-.92.15-1.4.21Zm2.58-.4c.46-.08.9-.17 1.34-.25-.44.08-.88.17-1.34.25Zm2.46-.46Zm2.33-.52c.42-.1.82-.21 1.22-.32-.41.11-.81.22-1.22.32Zm2.21-.58c.4-.11.78-.23 1.17-.35-.39.12-.77.24-1.17.35Zm2.09-.62c.38-.12.74-.25 1.11-.37-.37.12-.73.25-1.11.37Zm1.97-.66c.36-.13.71-.26 1.06-.39-.35.13-.69.27-1.06.39Zm1.85-.69c.35-.14.68-.28 1.02-.42-.34.14-.67.28-1.02.42Zm1.73-.71Zm1.61-.73c.32-.15.62-.3.93-.46-.31.15-.61.3-.93.46Zm1.49-.73c.34-.17.65-.34.97-.51-.32.17-.63.34-.97.51Zm3.27-2.72c-.02-.17-.08-.33-.17-.48.09.15.14.32.17.48Zm-.36-.73s-.04-.04-.07-.06c.02.02.05.04.07.06Zm-.32-.24s.05.03.08.05c-.03-.02-.05-.03-.08-.05Zm-.56-.15h-.09.09Zm-.39.05s.06-.01.09-.02c-.03 0-.06.01-.09.02Zm-33.43 8.07c6.92 0 12.83-.79 17.82-1.97-4.99 1.18-10.9 1.97-17.82 1.97h-.37.37Zm23.28-3.52c-1.4.47-2.9.91-4.5 1.32 1.6-.4 3.09-.85 4.5-1.32Zm-24.35 3.53Zm-1.14 2.08Z" />
        <path d="m97.7 28.11-18.05-5.24c-.08-.02-.17-.04-.26-.04-.05 0-.1 0-.16.01a.98.98 0 0 0-.64-.24l-29.85.17c-.21-4.9-5.64-7.62-7.52-8.01l-.19-.04c-.69-.15-1.64-.35-2.89-.35-2.98 0-6.28 1.2-9.79 3.58-.12.08-2.96 1.98-6.19 4.97l-21.1.12c-.58 0-1.06.48-1.06 1.06v9.68c0 .28.12.55.32.75.2.2.47.31.75.31l12-.02-.03.05-.38.67C8.21 43.37 1.5 55.18.51 69.09c-.75 10.49.91 13.97 2.12 16.5.57 1.21.99 2.08.94 3.48-.19 5.14.72 8.48 2.78 10.2 1 .829 2.23 1.249 3.68 1.249h.33c.58-.01 1.18-.09 1.78-.22 1.34-.3 2.9-.44 4.76-.44 3 .02 6.39.39 9.99.79 4.27.47 9.1 1.01 14.06 1.01l.06-.21v.21h.09c.92 0 1.83-.02 2.7-.05 12.04-.51 24.82-2.43 31.8-4.77 5.96-2.01 16.62-9.54 14.36-23.72-.05-1.04-.86-10.53-14.54-16.8-3.08-1.41-6.43-2.13-9.97-2.13h-.53c-10.24.15-18.79 6.17-19.15 6.43-.23.18-5.57 4.37-8.38 8.66-1.31.13-5.22.62-8.52 2.09.56-1.42.86-2.91.92-4.53.13-3.44-.86-6.87-1.73-9.89-.12-.42-.24-.84-.36-1.25-.93-3.3-1.67-6.48-.48-9.02 1.01-2.16 1.85-3.93 2.48-5.25.33-.69.56-1.16.73-1.49 1.03.57 2.47.81 4.77.81.76 0 1.63-.03 2.58-.08a28.8 28.8 0 0 0 3.03-.32c3.39-.54 5.35-1.62 6.01-3.31.27-.7.29-1.45.07-2.24l31.6-.04h.03c.08 0 .15-.01.22-.03l18.94-4.55c.47-.11.8-.53.81-1.01.01-.48-.3-.91-.77-1.04l-.02-.02Zm-19.85-.96c.47.7.48 2.57.25 2.86-.59.59-.97 1.62-.98 2.61l-31.43.04c-.09-.11-.15-.17-.17-.19-.38-.35-.71-.7-1-1.06-.9-1.09-1.25-2.1-1.06-2.98.4-1.82 3-3.06 3.79-3.39.12-.05.23-.1.33-.13l29.76-.17c-.05.73.02 1.67.51 2.41ZM40.83 16.64c1.37.28 5.95 2.47 6.01 6.36v.15c-.36.14-.9.38-1.51.71-.43.24-.89.52-1.34.86-.79.59-1.54 1.34-2.01 2.26-.17.33-.3.68-.39 1.05-.35 1.58.23 3.21 1.67 4.86.12.13.24.27.37.4.14.15.29.3.44.44l.11.11s.28.31.53.74c.29.5.55 1.16.31 1.76-.19.47-.79 1.17-2.62 1.7 1.82-.54 2.43-1.23 2.62-1.7.24-.6-.02-1.26-.31-1.76-.25-.43-.53-.74-.53-.74l-.11-.11c-.16-.15-.3-.3-.44-.44-.13-.13-.25-.27-.37-.4-1.44-1.65-2.01-3.28-1.67-4.86.08-.37.22-.72.39-1.05.47-.92 1.21-1.67 2.01-2.26.45-.34.91-.62 1.34-.86.61-.33 1.15-.57 1.51-.71V23c-.06-3.89-4.63-6.07-6.01-6.36l-.2-.04c-.12-.03-.26-.06-.41-.08.15.03.28.06.41.08l.2.04Zm-3.2 21.9c-.91.05-1.73.08-2.44.08-3.44 0-3.98-.61-4.51-1.21-.76-.86-1.59-1.59-3.95-1.92-.39-.05-.79-.09-1.23-.12h-.06c-.55 0-1.04.44-1.08.99-.04.58.4 1.09.99 1.13 2.24.15 2.96.56 3.41.99-.34.67-1.23 2.47-3.48 7.29-1.65 3.53-.5 7.53.72 11.76.24.82.47 1.64.69 2.46 1.02 3.85 1.68 7.93-.35 11.77-.74 1.39-1.32 2.5-1.78 3.41-2.17 4.26-2.03 4.61-1.23 5.13.13.08.33.18.6.18.4 0 .77-.22 1.11-.65.24-.3.29-.7.16-1.05.25-.58.78-1.71 1.9-3.89v-.02c.05-.02.1-.05.15-.09 3.4-2.91 10.73-3.43 10.81-3.44.34-.02.66-.21.83-.51 2.44-4 7.89-8.34 8.12-8.52.08-.05 8.17-5.72 17.75-5.97h.63c3.21 0 6.23.64 8.98 1.9 12.9 5.91 13.3 14.64 13.31 15.01 0 .05 0 .09.01.14C89.76 86.2 80.14 93 74.76 94.81c-6.81 2.29-19.35 4.17-31.21 4.66-.67.03-1.38.04-2.11.05h-.48c-4.87 0-9.64-.53-13.85-.99-3.7-.41-7.2-.8-10.31-.8h-.07c-2.01 0-3.71.16-5.21.49-.53.12-1.03.17-1.49.17h-.09c-.91-.02-1.64-.26-2.23-.76-1.51-1.26-2.19-4.11-2.02-8.49.07-1.92-.49-3.1-1.14-4.47-1.11-2.33-2.62-5.51-1.92-15.44.95-13.43 7.53-24.99 11.88-32.64.37-.66.73-1.28 1.06-1.88.15-.27.29-.52.44-.78l.04-.07.12-.22.17-.31.12-.21.06-.11c1.48-2.6 3.69-5.3 6.57-8.03.31-.29.62-.58.92-.85.33-.3.65-.58.96-.85 2.43-2.1 4.35-3.42 4.57-3.56.08-.05.16-.1.23-.15l.16-.1c3-1.96 5.78-2.95 8.26-2.95 1.04 0 1.83.17 2.4.29l.2.04c1.27.26 5.78 2.37 5.84 6.15-.35.14-.84.36-1.4.67-.49.27-.95.56-1.37.87-.94.71-1.64 1.49-2.07 2.33-.19.38-.33.74-.4 1.1-.36 1.63.22 3.33 1.72 5.04.12.14.24.27.38.41.14.15.29.3.45.45l.04.04.06.06s.26.29.49.69c.36.62.46 1.15.3 1.57-.17.43-.83 1.24-3.33 1.79-1.07.24-2.37.4-3.86.49l-.01.03ZM26.2 57.47c.24.82.47 1.64.69 2.46 1.06 3.99 1.69 8.05-.37 11.92-.72 1.36-1.3 2.48-1.78 3.41-2.17 4.28-1.93 4.45-1.31 4.85.1.06.27.15.48.15.07 0 .14 0 .21-.03a.8.8 0 0 1-.69-.12c-.62-.41-.87-.58 1.31-4.85.47-.93 1.05-2.05 1.78-3.41 2.05-3.88 1.43-7.93.37-11.92a99.1 99.1 0 0 0-.69-2.46c-1.21-4.19-2.35-8.15-.73-11.61 2.46-5.27 3.29-6.91 3.55-7.42-.51-.53-1.23-1-3.66-1.16a.849.849 0 0 1-.79-.9c0-.12.04-.22.09-.32a.843.843 0 0 0 .7 1.22c2.43.16 3.15.63 3.66 1.16-.27.51-1.09 2.15-3.55 7.42-1.62 3.46-.48 7.42.73 11.61Zm-1.47-21.5c.04-.06.08-.12.13-.17-.05.05-.09.11-.13.17Zm.24-.23a.95.95 0 0 1 .17-.1c-.06.02-.11.06-.17.1Zm.3-.12c.06-.01.11-.03.16-.03h.04c-.07 0-.14.02-.21.03h.01Zm13.03-19.3c.18 0 .36 0 .53.02-.17-.01-.35-.02-.53-.02Zm.67.03c.2.02.4.04.58.06a4.93 4.93 0 0 0-.58-.06Zm.69.08c.15.02.29.05.42.07-.13-.02-.27-.05-.42-.07Zm-9.85 2.86c.42-.27.82-.52 1.22-.74-.39.23-.8.47-1.22.74Zm1.58-.94c.28-.15.55-.3.82-.43-.27.13-.54.28-.82.43Zm1.18-.61c.29-.14.57-.26.84-.37-.27.11-.55.24-.84.37Zm1.06-.47c.34-.14.67-.25.98-.35-.32.1-.64.22-.98.35Zm1.22-.42c.24-.07.47-.14.69-.19-.22.06-.45.12-.69.19Zm.97-.26Zm.84-.16Zm.84-.09c.21-.01.42-.02.62-.02-.2 0-.4 0-.62.02ZM14.65 32.42c-.09.16-.18.33-.27.49.09-.16.19-.33.27-.49 1.54-2.81 3.68-5.4 5.83-7.58-2.14 2.18-4.29 4.77-5.83 7.58ZM1.91 24.94l18.26-.1-18.26.1Zm18.06.11c-2.36 2.45-4.21 4.89-5.51 7.26l-.16.29-.05.09-12.13.02v-7.56l17.85-.1Zm-9.23 73.52c-.09.01-.17 0-.26.02.09 0 .17 0 .26-.02Zm5.99-.62h.07c-.28 0-.54 0-.82.01.25 0 .49-.01.75-.01Zm-1.34.03c-.28.01-.55.03-.82.05.27-.02.54-.04.82-.05Zm-1.33.08c-.28.03-.56.06-.83.1.27-.03.55-.07.83-.1Zm-1.28.15Zm27.39 1.52c-.28 0-.56 0-.84-.01.28 0 .56 0 .84.01Zm-1.85-.04c-.27 0-.55-.02-.82-.03l.82.03Zm-1.84-.08c-.26-.01-.53-.03-.79-.04.26.02.53.03.79.04Zm-1.84-.12c-.25-.02-.49-.03-.74-.05.24.02.49.04.74.05Zm-1.85-.15-.65-.06.65.06Zm-1.84-.17c-.18-.02-.36-.03-.53-.05.17.02.35.03.53.05Zm-1.97-.2c-.08 0-.16-.02-.24-.03.08 0 .16.02.24.03Zm12.6.78h-.15.15Zm46.31-26.38s-.01-.08-.01-.12c-.01-.37-.42-9.24-13.43-15.2-.02 0-.03-.01-.05-.02.02 0 .03.01.05.02 13.01 5.96 13.42 14.83 13.43 15.2 0 .04 0 .08.01.12 2.09 12.94-7.64 19.83-13.07 21.66 5.44-1.83 15.17-8.71 13.07-21.66Zm-13.87-17.4c.41.16.81.33 1.22.51-.41-.18-.81-.36-1.22-.51Zm-7.83.19c-.17 0-.35 0-.52-.01.17 0 .35 0 .52.01Zm.19-1.73c.23 0 .45.02.68.04-.23-.01-.45-.03-.68-.04Zm1.25.08c.23.02.46.05.69.07-.23-.03-.46-.05-.69-.07Zm1.26.14Zm1.27.21c.24.05.48.1.72.16-.24-.06-.48-.11-.72-.16Zm1.28.29c.25.06.5.14.75.21-.25-.07-.5-.15-.75-.21Zm1.28.37c.28.09.55.19.83.29-.28-.1-.55-.2-.83-.29Zm.53 2.04c-.14-.05-.27-.1-.41-.14.14.05.27.09.41.14Zm-1.18-.41c-.16-.05-.32-.09-.48-.14.16.05.32.09.48.14Zm-1.18-.34-.51-.12c.17.04.34.07.51.12Zm-1.19-.26c-.17-.03-.34-.06-.52-.09.17.03.34.06.52.09Zm-1.18-.19L68 56.3l.52.06Zm-1.18-.13c-.17-.01-.35-.03-.52-.04.17.01.35.02.52.04ZM38.01 71.15c-.05 0-3.57.26-6.88 1.37 3.31-1.12 6.83-1.37 6.88-1.37.07 0 .14-.02.2-.04-.06.02-.13.03-.2.04Zm-7.38-33.43-.03-.03.03.03Zm.14.14-.04-.04.04.04Zm4.22.98h-.25.25Zm-.69-.01h-.22.22Zm-.64-.03s-.1 0-.15-.01c.05 0 .1 0 .15.01Zm-1.09-.13s-.08-.02-.12-.02c.04 0 .08.02.12.02Zm-.38-.08-.12-.03.12.03Zm-.33-.09-.1-.03.1.03Zm-.3-.11s-.05-.02-.07-.03c.02 0 .04.02.07.03Zm-.48-.26s-.03-.02-.05-.03c.02.01.03.02.05.03Zm-.17-.13s-.03-.03-.05-.04c.02.01.03.03.05.04Zm5.78.81h-.2.2Zm2.41-.17Zm39.13-8.48c.29-.38.27-2.34-.25-3.11-.5-.75-.53-1.75-.45-2.51L48 24.71l29.53-.17c-.08.76-.05 1.75.45 2.51.51.77.54 2.73.25 3.11-.6.61-.98 1.71-.93 2.69-.05-.99.33-2.09.93-2.69Zm1 2.26c.05-.35.18-.73.36-.91 1.06-1.06.9-4.15 0-5.52-.11-.16-.16-.45-.16-.83v-.12l8.26 2.4v2.94l-8.45 2.03-.01.01Zm8.66-1.86v-3.27l-8.65-2.51 8.65 2.51v3.27Zm-8.35-7.46a.693.693 0 0 0-.2-.03c.06 0 .13 0 .19.03h.01Zm-41.27-8.5h-.29.29Zm2.23.24-.15-.03c.05 0 .1.02.15.03Zm-.64-.11s-.09-.01-.13-.02c.05 0 .09.01.13.02Zm-.81-.09c-.05 0-.11 0-.17-.01.06 0 .11 0 .17.01Zm-9.27 2.66c.34-.21.68-.4 1-.58-.33.18-.66.37-1 .58Zm1.11-.63Zm1.09-.55c.31-.14.61-.28.9-.39-.29.12-.59.25-.9.39Zm1.05-.45c.26-.1.51-.2.76-.28-.25.09-.5.18-.76.28Zm.92-.34Zm.96-.29c.23-.06.45-.11.67-.16-.22.05-.44.1-.67.16Zm.79-.19Zm.86-.14c.21-.03.41-.05.61-.07-.2.02-.4.04-.61.07Zm.67-.07Zm-14.99 8.5c3.21-2.97 6.02-4.86 6.23-5 .37-.25.72-.47 1.07-.69-.35.22-.71.44-1.07.69-.21.14-3.02 2.03-6.23 5ZM3.78 89.08c.05-1.45-.37-2.35-.96-3.58-1.2-2.52-2.84-5.96-2.1-16.4.98-13.86 7.69-25.65 12.12-33.45.2-.36.39-.7.59-1.04l-12.36.02a.857.857 0 0 1-.85-.85V24.1c0-.35.21-.65.51-.78-.3.13-.52.43-.52.78v9.68c0 .22.1.44.26.6.16.16.37.25.6.25l12.36-.02c-.19.34-.38.68-.59 1.04C8.41 43.45 1.7 55.25.72 69.1c-.74 10.44.9 13.88 2.1 16.4.59 1.23 1.01 2.12.96 3.58-.19 5.07.7 8.35 2.71 10.03-2.01-1.68-2.9-4.96-2.71-10.03Zm4.39 10.949c-.21-.07-.4-.16-.6-.25.19.09.39.18.6.25Zm2.18.28h-.32c-.15 0-.3-.02-.45-.03.25.02.5.04.76.03.22 0 .44-.03.66-.05-.22.02-.45.04-.66.05h.01Zm-1.8-.18c.19.05.39.1.59.12-.2-.03-.4-.08-.59-.12Zm3.54-.03c.03 0 .06 0 .09-.02-.03 0-.06 0-.09.02Zm4.13-.43c-.2 0-.4 0-.6.01.19 0 .4 0 .6-.01Zm-1.29.05-.54.03c.18-.02.36-.02.54-.03Zm-1.29.12c-.14.02-.29.03-.43.05.14-.02.29-.03.43-.05Zm27.29 1.61c-4.95 0-9.74-.53-14.04-1.01-3.66-.4-7.01-.77-9.97-.79 2.96.02 6.31.38 9.97.79 4.3.48 9.09 1.01 14.04 1.01h.05-.05Zm2.84-.06c-.9.04-1.8.06-2.69.06h-.09.09c.89 0 1.79-.02 2.69-.06 12.03-.51 24.78-2.42 31.74-4.76-6.96 2.34-19.71 4.26-31.74 4.76Zm22.04-46.99h-.91.91Zm-19.95 6.38c.33-.24 4.42-3.1 10.23-4.91-5.81 1.81-9.9 4.67-10.23 4.91-.23.18-5.61 4.4-8.38 8.69 2.77-4.29 8.15-8.51 8.38-8.69ZM31.7 70.56c-1.1.32-2.22.72-3.26 1.22 1.04-.51 2.17-.91 3.26-1.22Zm6.04-30.12c-.97.06-1.82.08-2.57.08-2.65 0-3.97-.34-4.85-.9.88.56 2.21.9 4.85.9.74 0 1.59-.03 2.57-.08Zm40.92-5.93c-.06.02-.13.02-.19.02l-31.89.04 31.89-.04c.06 0 .13 0 .19-.02l18.94-4.55-18.94 4.55ZM26.18 7.32l.33.64.07-.72.51-5.32c.01-.6-.16-1.09-.49-1.44-.31-.32-.75-.49-1.23-.49-.64 0-1.23.3-1.56.79-.32.49-.35 1.11-.08 1.77l2.45 4.77Zm-2.25-4.85 2.44 4.75-2.44-4.75Zm2.75-1.5c-.03-.06-.07-.12-.11-.18.04.05.07.11.11.18Zm.2.92c0-.15 0-.29-.03-.43.02.13.03.27.03.43Zm-.07-.56c-.02-.08-.04-.16-.07-.24.03.07.05.16.07.24Zm-.33-.65s-.09-.09-.14-.13c.05.04.09.08.14.13Zm-.81-.45Zm.57.24c-.05-.04-.11-.07-.16-.1.06.03.11.06.16.1Zm-.27-.15c-.06-.03-.13-.04-.2-.06l.2.06Zm-.96-.08-.11.03.11-.03Zm-.34.11-.12.06.12-.06Zm-.31.17s-.08.06-.11.09c.04-.03.07-.06.11-.09Zm-.26.23-.09.12.09-.12Zm-.2.3s-.04.09-.06.14c.02-.05.04-.09.06-.14Zm-.12.36c0 .05-.02.1-.03.15 0-.05.02-.1.03-.15Zm0 .58c0-.05 0-.1-.01-.15 0 .05 0 .1.01.15ZM8.238 5.09l13.3 9.03.27-.33-11.38-11.34c-.36-.34-.78-.52-1.2-.52-.72 0-1.42.53-1.66 1.27-.23.71.02 1.42.67 1.89Zm-.47-.94c.02.07.05.13.09.2-.04-.07-.06-.13-.09-.2Zm.14.28Zm.46.48 13.29 9.02-13.3-9.01.01-.01Zm1.91-2.32Zm-.37-.27c-.06-.03-.13-.07-.19-.09.06.02.13.06.19.09Zm-.3-.13c-.06-.02-.12-.03-.18-.04.06 0 .12.02.18.04Zm-.29-.05h-.18.18Zm-.99.33s.1-.08.16-.11c-.05.03-.11.07-.16.11Zm.22-.15c.08-.04.16-.08.24-.11-.08.03-.16.07-.24.11Zm.26-.12c.08-.03.16-.04.24-.06-.08.01-.16.03-.24.06Zm-.55.33s-.1.09-.14.14c.04-.05.09-.1.14-.14Zm-.19.19c-.06.07-.11.14-.15.22.04-.08.1-.15.15-.22Zm-.35.81c0 .07-.01.15 0 .22v-.22Zm.18-.55a.95.95 0 0 0-.09.21l.09-.21Zm-.12.29c-.02.06-.03.12-.05.19.01-.06.03-.12.05-.19Zm-.02.81c-.03-.09-.04-.18-.05-.27 0 .09.02.18.05.27Z" />
        <path d="m5.27 18.66 12.64.39 1.77.05-1.71-.47-12.18-3.36c-.17-.04-.34-.06-.49-.06-1.06 0-1.64.85-1.67 1.68-.03.82.47 1.68 1.64 1.77Zm-1.14-.79s.07.09.11.13a.689.689 0 0 1-.11-.13Zm-.15-.25s.05.1.08.14c-.03-.05-.06-.09-.08-.14Zm1.3.82c-.13 0-.26-.03-.37-.06.12.03.24.05.37.06l12.63.39-12.63-.39Zm-.95-.36s.1.07.15.11a.828.828 0 0 1-.15-.11Zm.26.17c.06.03.14.06.21.08-.07-.03-.15-.05-.21-.08Zm.73-2.84c-.08 0-.16 0-.24.02.07 0 .14-.02.21-.02h.03Zm-.95.34s-.1.08-.14.13c.04-.05.09-.09.14-.13Zm.62-.31Zm-.32.11c-.08.04-.16.08-.23.13.07-.05.15-.1.23-.13Zm-.5.42s-.07.09-.1.14c.03-.05.06-.1.1-.14Zm-.31.8c0 .05 0 .11-.01.16 0-.05 0-.11.01-.16Zm.16-.55c-.02.05-.05.1-.07.15.02-.05.04-.1.07-.15Zm-.1.27c-.01.05-.03.11-.04.16 0-.05.02-.11.04-.16Zm.03 1.01c-.02-.05-.04-.1-.05-.15.01.05.03.1.05.15Zm-.07-.28c0-.05-.02-.11-.02-.16 0 .05.01.11.02.16Z" />
      </g>
      <defs>
        <clipPath id="clip0_443_11238">
          <rect
            width="140"
            height="40.5714"
            fill="white"
            transform="translate(0 0.856934)"
          />
        </clipPath>
      </defs>
    </svg>
  </ALink>
);
export default SvgLogo;
