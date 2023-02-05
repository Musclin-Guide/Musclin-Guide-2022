import styles from '@components/ListPlaceholder/ListPlacehoder.module.css';

export const ListPlacehoder = () => {
  return (
    <section className={styles.box}>
      <div className={styles.contents}>검색된 내용이 없습니다</div>
    </section>
  );
};
