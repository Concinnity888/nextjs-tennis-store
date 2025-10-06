import styles from "./Page.module.css";
import Layout from "../Layout";
import { FC, ReactNode } from "react";

const Page: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <main className={styles.page}>
      <Layout>
        {children}
      </Layout>
    </main>
  );
};

export default Page;
