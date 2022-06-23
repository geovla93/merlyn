import { FC, PropsWithChildren } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Seo from '../Seo';

type LayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between">
      <Seo title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
