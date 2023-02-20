import { NoWidjectLayout } from '@components/Layout/NowidgetLayout';
import Tabbarstyles from '@components/TabBar/TabBar.module.css';
import { useEffect } from 'react';
export default function ProfileEdit() {
  useEffect(() => {
    const ActiveCocktailTabBar = document.querySelectorAll(
      '.TabBar_default__Dx5I1'
    );
    // textArea.current && textArea.current.focus();
    ActiveCocktailTabBar[3].classList.add(Tabbarstyles.active);
  }, []);
  return (
    <NoWidjectLayout subject={'회원정보 수정페이지'}>
      <div>test</div>
    </NoWidjectLayout>
  );
}
