import {
  HiChevronDown as Down,
  HiChevronUp as Up,
  HiChevronRight as Right,
} from 'react-icons/hi';

import styles from '@components/ProductCategoryButton/ProductCategoryButton.module.css';
import { IconContext } from 'react-icons';
import { memo, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ProductCategoryButtonProps {
  icon?: {
    type: 'Up' | 'Down';
    element: JSX.Element;
  };
  listName?: string;
  children?: ReactNode;
  onClick?: () => void;
}

const ProductCategoryButton = ({
  icon = {
    type: 'Down',
    element: <Down />,
  },
  listName,
  children,
  onClick,
}: ProductCategoryButtonProps): JSX.Element => {
  const [isToggle, settoggle] = useState(true);
  const changeToggle = () => {
    settoggle((prev: boolean) => !prev);
  };
  const router = useRouter();
  const depth = (router.query.de as string) || '';
  return (
    <ul className={styles.box}>
      <div onClick={changeToggle} className={styles.lis}>
        <div className={styles.produectImg}></div>
        <span className="grow">{listName}</span>
        <IconContext.Provider value={{ className: styles.icon }}>
          {(icon.element = isToggle ? <Down /> : <Up />)}
        </IconContext.Provider>
      </div>

      {isToggle ? null : children}
    </ul>
  );
};

interface ProductCategoryProps extends ProductCategoryButtonProps {
  listData?: any[];
  href?: string;
}

export const ProductCategory = memo(function ProductCategory({
  listName,
  listData,
  href,
}: ProductCategoryProps) {
  return (
    <ProductCategoryButton listName={listName}>
      {listData?.map((index) => {
        return (
          <li key={index.id} className={styles.li}>
            <Link
              className={styles.aLink}
              href={{
                pathname: `search/[...category]`,
                query: {
                  category: href,
                  detail: index.category_name,
                },
              }}
            >
              {index.category_name}
              <Right className={styles.icon} />
            </Link>
          </li>
        );
      })}
    </ProductCategoryButton>
  );
});
