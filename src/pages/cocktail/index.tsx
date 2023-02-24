import { Layout } from '@components/Layout/Layout';
import dynamic from 'next/dynamic';
import { CocktailList } from '@components/CocktailList/CocktailList';
import { Spinners } from '@components/Spinner';
import { Suspense } from 'react';

export { loginState } from '@atoms/Login';

const SearchSection = dynamic(() =>
  import('@components/SearchSection/SearchSection').then(
    (module) => module.default
  )
);

function CocktailPage() {
  return (
    <Layout className="s-center" subject="칵테일페이지입니다">
      <SearchSection />
      <Suspense fallback={<Spinners />}>
        <CocktailList />
      </Suspense>
    </Layout>
  );
}

export default CocktailPage;
