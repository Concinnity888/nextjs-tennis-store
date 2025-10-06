import { FC } from "react";
import styles from "./Rackets.module.css";
import Card from "@/components/Card";
import { rackets } from "@/constants/mock";

const Rackets: FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.head}>
        <h1 className={styles.title}>Ракетки</h1>
      </div>
      <div className={styles.catalog}>
        {rackets?.map((racket) => (
          <Card racket={racket} key={racket.id} />
        ))}
      </div>
    </div>
  );
};

export default Rackets;
