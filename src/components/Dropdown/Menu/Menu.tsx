/* eslint-disable jsx-a11y/role-supports-aria-props */
import menu from '@components/Dropdown/Menu/Menu.module.css';
import { ALinkMenuItem } from '@components/Dropdown/ALinkMenuItem';
import { List } from '@components/Dropdown/Menu/List';
import clsx from 'clsx';
import { MutableRefObject, useEffect, useRef } from 'react';

interface MenuItemsProps {
  className: string;
  addClassName?: string;
  onClick?: () => void;
}

export const Menu = ({
  className,
  addClassName,
}: MenuItemsProps): JSX.Element => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      overflow-y: scroll;
      width: 100%; 
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ul className={clsx(menu.menuShapeDefault, addClassName)}>
      {List.map(({ id, href, text, isExternal }) => (
        <li className={menu.listTextStype} key={id}>
          <ALinkMenuItem
            className={className}
            href={href}
            isExternal={isExternal}
          >
            {text}
          </ALinkMenuItem>
        </li>
      ))}
    </ul>
  );
};
