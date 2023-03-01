import { EditButton } from '@components/EditButton/EditButton';
import { Layout } from '@components/Layout/Layout';
import { RHForm } from '@components/RHForm';
import { RHInput } from '@components/RHInput/RHInput';
import styles from '@components/TextInput/TextInput.module.css';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
export { loginState } from '@atoms/Login';


interface ISearchForm {
  keyword: string;
}

const SearchSection = () => {
  const router = useRouter();
  const onValid = useCallback<SubmitHandler<ISearchForm>>(
    ({ keyword }) => {
      router.push({
        pathname: `/cocktail/result/${keyword}`,
        query: {
          re: keyword,
        },
      });
    },
    [router]
  );
  const onInvalid = useCallback<SubmitErrorHandler<ISearchForm>>((erros) => {
    if (!erros.keyword) {
      return;
    }

    if (erros.keyword.type === 'minLength') {
      alert('검색어가 너무 짧습니다. 2자이상 입력해주세요.');

      return;
    }

    alert('검색어를 입력하세요');
  }, []);

  return (
    <RHForm<ISearchForm> onValid={onValid} onInvalid={onInvalid}>
      <section className="flex items-center gap-2">
        <RHInput<ISearchForm>
          name="keyword"
          placeholder="칵테일을 검색해보세요"
          className={styles.Input}
          type="text"
          rules={{ required: true, minLength: 2 }}
        />
        <EditButton size="large" type="submit">
          <BsSearch className="EditButton_icon__iGeUo" />
        </EditButton>
      </section>
    </RHForm>
  );
};




export default function CocktailPage() {
  return (
    <Layout className="s-center" subject="칵테일페이지입니다">
      <SearchSection />
      <Suspense fallback={<Spinners />}>
        <CocktailList />
      </Suspense>
    </Layout>
  );
}


