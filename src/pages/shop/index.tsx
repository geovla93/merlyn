import type { GetStaticProps, NextPageWithLayout } from 'next';

import Layout from '@/components/common/Layout';

const ShopPage: NextPageWithLayout = () => {
  return <div>Enter</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: null,
    },
  };
};

ShopPage.getLayout = (page) => {
  return <Layout title="Shop">{page}</Layout>;
};

export default ShopPage;
