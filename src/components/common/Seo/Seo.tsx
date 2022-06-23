import Head from 'next/head';
import { FC } from 'react';

type SeoProps = {
  title: string;
  description?: string;
};

const Seo: FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title + ' | Merlyn'}</title>
      <meta
        name="description"
        content={description || 'Merlyn Commerce build with Next.js'}
      />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
};
export default Seo;
