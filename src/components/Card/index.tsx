import { FC } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

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
      <Link className={styles.link} href={`/racket/${racket.id}`}>{racket.name}</Link>
    </div>
  );
};

export default Card;
