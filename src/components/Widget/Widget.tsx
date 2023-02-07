import { Menu, MenuButton } from '@components/index';
import { widgetToggle } from '@atoms/Widget';
import { useRecoilState } from 'recoil';
import menuStyle from '@components/Dropdown/Menu/Menu.module.css';
import widgetStyle from '@components/Widget/Widget.module.css';
import clsx from 'clsx';

export const Widget = (): JSX.Element => {
  const [Toggle, setToggle] = useRecoilState(widgetToggle);

  return (
    <aside
      className={clsx(widgetStyle.widgetWrapper, menuStyle.menuShapeShadow)}
    >
      {!Toggle && (
        <Menu
          aria-expanded="true"
          aria-haspopup="true"
          aria-orientation="vertical"
          addClassName={clsx(menuStyle.menuShapeShadow)}
          className={clsx(menuStyle.ItemListCenter)}
        />
      )}

      <MenuButton
        className={clsx(
          'MenuButton_MenuButtonDefault__Si_1G MenuButton_writeButton__V7Ts2 primaryFocusVisible',
          'ml-[7.75rem]'
        )}
      />
    </aside>
  );
};
