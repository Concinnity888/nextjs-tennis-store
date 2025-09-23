import { FC } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import { rackets } from "@/constants/mock";
import Card from "@/components/Card";

const Home: FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <h1 className={styles.title}>Ракетки</h1>
        <Link className={styles.allLink} href="/rackets">Все</Link>
      </div>
      <div className={styles.catalog}>
        {rackets?.map((racket) => (
          <Card racket={racket} key={racket.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
