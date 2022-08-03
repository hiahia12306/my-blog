import type { NextPage } from 'next';
import Link from 'next/link';
import { navList } from './config';

const Nav: NextPage = () => {
  return (
    <div>
      <section>BLOG</section>
      <section>
        {navList.map((item) => (
          <Link key={item.lable} href={item.path}>
            <span>{item?.lable}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};
export default Nav;
