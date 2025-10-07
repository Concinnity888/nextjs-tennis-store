import Rackets from "@/containers/Rackets";
import { getRackets } from "@/servises/getRackets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Rackets",
};

const Page = async () => {
  const { data = [], isError } = await getRackets({ limit: 20 });

  if (isError) {
    return 'Error';
  }

  return <Rackets rackets={data} />;
};

export default Page;
