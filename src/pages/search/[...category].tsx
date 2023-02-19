import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { useEffect } from 'react';
import Tabbarstyles from '@components/TabBar/TabBar.module.css';
import { Button } from '@components/Button/index';
import { BsPlus } from 'react-icons/bs/index';
import { useSearchParams } from 'next/navigation';

export default function Category() {
  const searchParams = useSearchParams();
  const searchQueryWordofDetail = searchParams.get('detail');
  const searchQueryWordofCategory = searchParams.get('category');

  useEffect(() => {
    const ActiveCocktailTabBar = document.querySelectorAll(
      '.TabBar_default__Dx5I1'
    );
    // textArea.current && textArea.current.focus();
    ActiveCocktailTabBar[2].classList.add(Tabbarstyles.active);
  }, []);
  return (
    <SubHeaderLayout subject={'제품탐색 페이지입니다.'}>
      <span className="text-neutral-700 flex flex-col ">
        <strong className="text-lg font-normal text-neutral-400">
          {searchQueryWordofCategory}별 제품
        </strong>
        <span className="text-3xl font-medium mb-4">
          {searchQueryWordofDetail}
        </span>
      </span>
      <Button
        icon={{
          type: 'Leading',
          element: <BsPlus />,
        }}
        color="White"
        size="xxs"
        className="float-right"
      >
        원하시는 제품이 없나요?
      </Button>
    </SubHeaderLayout>
  );
}
