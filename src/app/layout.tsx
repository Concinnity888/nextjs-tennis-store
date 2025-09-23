import Header from "../components/Header";
import Footer from "../components/Footer";
import Page from "../components/Page";
import { FC } from "react";

import styles from "./layout.module.css";

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={styles.body}>
        <Header />
        <Page>
          {children}
        </Page>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
