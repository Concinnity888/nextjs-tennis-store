import { FC } from "react";
import styles from "./Rackets.module.css";
import Card from "@/components/Card";
import { IRacket } from "@/types/racket";

type Props = {
  rackets: IRacket[];
};

const Rackets: FC<Props> = ({ rackets }) => {
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
