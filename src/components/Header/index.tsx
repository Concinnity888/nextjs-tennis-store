"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Layout from "@/components/Layout";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const MENUS = [
  {
    id: '1',
    title: 'Главная',
    href: '/',
  },
  {
    id: '2',
    title: 'Ракетки',
    href: '/rackets',
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Layout>
        <ul className={styles.menu}>
          {MENUS.map((link) => (
            <li className={styles.menuItem} key={link.id}>
              <Link
                className={classNames(styles.link, {
                  [styles.isActive]: link.href === pathname,
                })}
                href={link.href}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </header>
  );
};

export default Header;
