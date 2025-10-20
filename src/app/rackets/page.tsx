import Rackets from "@/containers/Rackets";
import { getRackets } from "@/servises/getRackets";

const Page = async () => {
  const { data = [], isError } = await getRackets({ limit: 20 });

  if (isError) {
    throw new Error("error");
  }

  return <Rackets rackets={data} />;
};

export default Page;
