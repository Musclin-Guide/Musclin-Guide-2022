import { EditButton } from '@components/EditButton/EditButton';
import styles from '@components/TextInput/TextInput.module.css';
import { useRouter } from 'next/router';
import { memo, MutableRefObject, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const inputValue = (inputRef: MutableRefObject<HTMLInputElement | null>) => {
  if (inputRef && inputRef.current !== null) {
    return inputRef.current.value;
  }
};

const SearchSection = memo(function SearchSection() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const result = (router.query.re as string) || '';
  return (
    <div className="flex items-center gap-2">
      <input
        className={styles.Input}
        type="text"
        placeholder="칵테일을 검색해보세요"
        ref={inputRef}
      />
      <EditButton
        size="large"
        type="button"
        onClick={() => {
          if (inputRef.current !== null && inputRef.current.value) {
            router.push({
              pathname: `/cocktail/result/${result}`,
              query: {
                re: `${inputValue(inputRef)}`,
              },
            });
          } else {
            alert('검색어가 너무 짧습니다. 2자이상 입력해주세요.');
          }
        }}
      >
        <BsSearch className="EditButton_icon__iGeUo" />
      </EditButton>
    </div>
  );
});

export default SearchSection;
