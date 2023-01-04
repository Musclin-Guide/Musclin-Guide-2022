import { FiChevronDown } from 'react-icons/fi';
import { ALinkMenuItem } from '@components/Dropdown/Select/index';
import { ListDummy } from '@components/Dropdown/Select/ListDummy';
import select from '@components/Dropdown/Select/Select.module.css';
import clsx from 'clsx';

interface SelectProps {
  ariaExpanded?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Select = ({
  className = select.selectButtonShort,
  ariaExpanded = true,
  onClick,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <>
      <label htmlFor="제품별 리스트">
        <button
          onClick={onClick}
          aria-expanded={ariaExpanded}
          tabIndex={0}
          className={clsx(
            select.selectText,
            select.selectButton,
            className,
            'primaryFocusVisible '
          )}
        >
          {ListDummy[0].text}
          <FiChevronDown className={select.icon} />
        </button>
      </label>
      <ul
        className={clsx(select.selectText, select.selectUl)}
        id="제품별 리스트"
      >
        {ListDummy.map(({ id, value, text, href, isExternal }) => {
          return (
            <li className={className} key={id} value={value}>
              <ALinkMenuItem
                className="px-4"
                href={href}
                isExternal={isExternal}
              >
                {text}
              </ALinkMenuItem>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// export const SelectType = (): JSX.Element => (
//   <Select>
//     {ListDummy.map(({ id, value, text, href, isExternal }) => {
//       return (
//         <li
//           className="first:rounded-t-md last:rounded-b-md  flex justify-center items-center text-center w-[108px] h-[38px]"
//           key={id}
//           value={value}
//         >
//           <ALinkMenuItem href={href} isExternal={isExternal}>
//             {text}
//           </ALinkMenuItem>
//         </li>
//       );
//     })}
//   </Select>
// );
