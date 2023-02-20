import styles from '@components/ListPlaceholder/ListPlacehoder.module.css';

interface ListPlacehoderProps {
  contents?: string;
}
export const ListPlacehoder = ({
  contents = '검색된 내용이 없습니다',
}: ListPlacehoderProps) => {
  return (
    <section className={styles.box}>
      <div className={styles.contents}>{contents}</div>
    </section>
  );
};
