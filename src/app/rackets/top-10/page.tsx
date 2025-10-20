import Rackets from "@/containers/Rackets";
import { getTop10 } from "@/servises/getTop10";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Rackets",
};

const Page = async () => {
  const { isError, data = [] } = await getTop10();

  if (isError) {
    throw new Error("error");
  }

  return <Rackets rackets={data} />;
};

export default Page;
