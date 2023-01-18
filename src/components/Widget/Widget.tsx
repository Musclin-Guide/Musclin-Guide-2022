//위젯 활성화시 뒤의 콘텐츠 등이 disable같은 회식 필터가 씌워지며
//스크롤및 클릭 이벤트가 비활성화 된다.

import { Menu, MenuButton } from '@components/index';
import { widgetToggle } from '@atoms/Widget';
import { useRecoilState, useRecoilValue } from 'recoil';
import menuStyle from '@components/Dropdown/Menu/Menu.module.css';
import widgetStyle from '@components/Widget/Widget.module.css';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

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