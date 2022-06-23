import type { GetStaticProps, NextPageWithLayout } from 'next';

import Layout from '@/components/common/Layout';

const HomePage: NextPageWithLayout = () => {
  return (
    <main className="flex-grow">
      <h1 className="text-blue-500">Hello world</h1>
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
