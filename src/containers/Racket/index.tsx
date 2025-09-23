import { FC } from "react";
import styles from "./Racket.module.css";
import Image from "next/image";

interface Props {
  imageUrl?: string;
  name?: string;
  price?: number;
  description?: string;
  brand?: {
    name: string;
  };
};

const Racket: FC<Props> = ({ name, brand, description, imageUrl, price }) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <h2 className={styles.brand}>{brand?.name}</h2>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.text}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        {imageUrl && (
          <Image
            className={styles.image}
            src={imageUrl}
            width={230}
            height={240}
            alt={name || ''}
          />
        )}
      </div>
      {price && <div className={styles.price}>{`€${price}.00`}</div>}
    </div>
  );
};

export default Racket;
