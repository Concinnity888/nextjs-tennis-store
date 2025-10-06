import styles from "./Footer.module.css";
import Layout from "../Layout";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.content}>
          <p className={styles.copyright}>© Tennis Store. All rights reserved.</p>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
