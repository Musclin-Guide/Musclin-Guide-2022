import { atom, useRecoilState } from 'recoil';
import {
  HiChevronDown as Down,
  HiChevronUp as Up,
  HiChevronRight as Right,
} from 'react-icons/hi';
import clsx from 'clsx';
import styles from '@components/ProductCategoryButton/ProductCategoryButton.module.css';
import { IconContext } from 'react-icons';
import { ALinkMenuItem as ALink } from '@components/index';

// ? 하위 리스트들 칠드런으로 빼야할까요?
const toggle = atom({
  key: 'toggle',
  default: true,
});
const DummyData: string[] = ['크레아틴', '베타알라닌', '시트룰린'];

interface ProductCategoryButtonProps {
  icon?: {
    type: 'Up' | 'Down';
    element: JSX.Element;
  };
  listName?: string;
}

export const ProductCategoryButton = ({
  icon = {
    type: 'Down',
    element: <Down />,
  },
  listName,
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
          {DummyData.map((i) => (
            <li key={i} className={clsx(istoggle ? 'hidden' : styles.li)}>
              <ALink className={styles.aLink} href={''} isExternal={false}>
                {i}
                <Right className={styles.icon} />
              </ALink>
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
};
