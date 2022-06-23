import type { GetStaticProps, NextPageWithLayout } from 'next';

import Layout from '@/components/common/Layout';
import { products } from '@/lib/data';
import List from '@/components/ui/List';
import ProductItem from '@/components/product/ProductItem';

const HomePage: NextPageWithLayout = () => {
  return (
    <main className="flex-grow container py-16">
      <List
        className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"
        data={products}
        keyExtractor={(product) => product.name}
        renderItem={(product) => <ProductItem product={product} />}
      />
    </main>
  );
};

HomePage.getLayout = (page) => {
  return <Layout title="Homepage">{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: null,
    },
  };
};

export default HomePage;
