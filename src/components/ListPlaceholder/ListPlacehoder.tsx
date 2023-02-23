import styles from '@components/ListPlaceholder/ListPlacehoder.module.css';

interface ListPlacehoderProps {
  contents?: string;
  boxSize?: 'small' | 'normal';
}

const boxSizes = {
  small: styles.boxSmall,
  normal: styles.box,
};

export const ListPlacehoder = ({
  contents = '검색된 내용이 없습니다',
  boxSize = 'normal',
}: ListPlacehoderProps) => {
  return (
    <section className={boxSizes[boxSize]}>
      <div className={styles.contents}>{contents}</div>
    </section>
  );
};
