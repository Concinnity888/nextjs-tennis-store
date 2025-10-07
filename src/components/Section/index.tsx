import { FC, ReactNode } from "react";
import styles from "./Section.module.css";

const Section: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className={styles.section}>
      {children}
    </div>
  );
};

export default Section;
