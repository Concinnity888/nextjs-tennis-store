import { FC } from "react";
import styles from "./Card.module.css";
import Image from "next/image";

interface Props {
  racket: {
    id: number;
    imageUrl: string;
    name: string;
  };
};

const Card: FC<Props> = ({ racket }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {racket?.imageUrl && (
          <Image className={styles.image} src={racket.imageUrl} alt={racket.name} width={230} height={240} />
        )}
      </div>
      <h2 className={styles.title}>{racket.name}</h2>
    </div>
  );
};

export default Card;
