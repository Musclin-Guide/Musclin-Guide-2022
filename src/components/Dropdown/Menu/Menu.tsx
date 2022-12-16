import menu from '@components/Dropdown/Menu/Menu.module.css';
import { ALinkMenuItem } from '@components/Dropdown/ALinkMenuItem';
import { ListDummy } from '@components/Dropdown/Menu/ListDummy';
import clsx from 'clsx';

interface MenuItemsProps {
  className: string;
  addClassName?: string;
}

export const Menu = ({
  className,
  addClassName,
}: MenuItemsProps): JSX.Element => {
  return (
    <ul className={clsx(menu.menuShapeDefault, addClassName)}>
      {ListDummy.map(({ id, href, text, isExternal }) => (
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
