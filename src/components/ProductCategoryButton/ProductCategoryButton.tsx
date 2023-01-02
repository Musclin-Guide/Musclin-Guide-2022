import { atom, useRecoilState } from 'recoil';
import {
  HiChevronDown as Down,
  HiChevronUp as Up,
  HiChevronRight as Right,
} from 'react-icons/hi';
import clsx from 'clsx';
import styles from '@components/ProductCategoryButton/ProductCategoryButton.module.css';
import { IconContext } from 'react-icons';

// ? 하위 리스트들 칠드런으로 빼야할까요?
const toggle = atom({
  key: 'toggle',
  default: true,
});

interface ProductCategoryButtonProps {
  icon?: {
    type: 'Up' | 'Down';
    element: JSX.Element;
  };
  listName?: string;
  listchildName?: string;
}

export const ProductCategoryButton = ({
  icon = {
    type: 'Down',
    element: <Down />,
  },
  listName,
  listchildName,
}: ProductCategoryButtonProps): JSX.Element => {
  const [istoggle, settoggle] = useRecoilState(toggle);

  const changeToggle = () => {
    settoggle((prev: boolean) => !prev);
  };

  return (
    <>
      <ul className={styles.box}>
        <li onClick={changeToggle} className={styles.lis}>
          <div className={styles.produectImg}></div>
          <span className="grow">{listName}</span>
          <IconContext.Provider value={{ className: styles.icon }}>
            {(icon.element = istoggle ? <Down /> : <Up />)}
          </IconContext.Provider>
        </li>
        <ul>
          <li className={clsx(istoggle ? 'hidden' : styles.li)}>
            {listchildName}
            <Right className={styles.icon} />
          </li>
        </ul>
      </ul>
    </>
  );
};
