import { FC } from "react";
import styles from "./Home.module.css";
import Link from "next/link";
import Card from "@/components/Card";
import { getRackets } from "@/servises/getRackets";
import { getTop10 } from "@/servises/getTop10";
import Head from "@/components/Head";
import Section from "@/components/Section";

const Home: FC = async () => {
  const racketsPromise = getRackets({ limit: 10 });
  const top10Promise = getTop10();

  const [
    { isError: isRacketsError, data: racketsData = [] },
    { isError: isRacketsTop10Error, data: racketsTop10Data = [] },
  ] = await Promise.all([racketsPromise, top10Promise]);

  return (
    <div className={styles.body}>
      <Section>
        <Head>
          <h1 className={styles.title}>Ракетки</h1>
          <Link className={styles.allLink} href="/rackets">Все</Link>
        </Head>
        <div className={styles.catalog}>
          {racketsData?.map((racket) => (
            <Card racket={racket} key={racket.id} />
          ))}
        </div>
      </Section>

      <Section>
        <Head>
          <h2 className={styles.subtitle}>ТОП 10</h2>
          <Link className={styles.link} href="/rackets/top-10">ТОП-10</Link>
        </Head>
        <div className={styles.catalog}>
          {racketsTop10Data?.map((racket) => (
            <Card racket={racket} key={racket.id} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
