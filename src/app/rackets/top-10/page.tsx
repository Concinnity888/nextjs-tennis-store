import Rackets from "@/containers/Rackets";
import { getTop10 } from "@/servises/getTop10";

const Page = async () => {
  const { isError, data = [] } = await getTop10();

  if (isError) {
    return "error";
  }

  return <Rackets rackets={data} />;
};

export default Page;
