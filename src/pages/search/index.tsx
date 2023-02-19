import { SubHeaderLayout } from '@components/Layout/SubHeaderLayout';
import { ProductCategory } from '@components/ProductCategoryButton';
import { supabase } from '@lib/supabase';

export default function SearchPage({
  category_depth_0,
}: {
  category_depth_0: any;
}) {
  return (
    <SubHeaderLayout subject={'제품탐색페이지입니다'}>
      <h2 className="indent-4 text-neutral-700 text-3xl leading-9 font-semibold">
        제품탐색
      </h2>
      {category_depth_0.map(
        (item: {
          category_depth_1: any[];
          category_name: string | undefined;
          category_id: string | undefined;
        }) => {
          return (
            <ProductCategory
              key={item.category_id}
              listName={item.category_name}
              listData={item.category_depth_1}
              href={item.category_name}
            />
          );
        }
      )}
    </SubHeaderLayout>
  );
}

export const getServerSideProps = async () => {
  const { data: category_depth_0 } = await supabase
    .from('category_depth_0')
    .select(
      `*, category_depth_1(
   id,category_name )`
    )
    .order('id', { foreignTable: 'category_depth_1', ascending: true });

  return {
    props: {
      category_depth_0: category_depth_0 ?? [],
    },
  };
};
