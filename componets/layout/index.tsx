import type { NextPage } from 'next';
import Nav from '@/componets/Nav';
import Footer from '@/componets/Footer';

const Layout: NextPage<any> = ({ children }: any) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
