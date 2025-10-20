import { FC, ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import styles from "./Layout.module.css";

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NextTopLoader />
      {children}
    </div>
  );
};

export default Layout;
