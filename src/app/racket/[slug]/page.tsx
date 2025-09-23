import { FC } from "react";
import { rackets } from "@/constants/mock";
import Racket from "@/containers/Racket";

export const generateStaticParams = () => {
  return [{ slug: "1" }, { slug: "2" }, { slug: "3" }];
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const racket = rackets.find((racket) => racket.id === Number(slug));

  return (
    <Racket {...racket} />
  );
};

export default Page;
