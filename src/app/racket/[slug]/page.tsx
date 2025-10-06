import { FC, Suspense } from "react";
import Racket from "@/containers/Racket";
import { getRacketById } from "@/servises/getRacketById";
import { notFound } from "next/navigation";
import Loading from "./loading";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const Page: FC<Props> = async ({ params }) => {
  const { slug } = await params;

  const { data: racket, isError } = await getRacketById({ id: slug });

  if (!isError && !racket) {
    return 'No result';
  }

  if (isError) {
    return 'Error';
  }

  if (!racket) {
    return notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <Racket {...racket} />
    </Suspense>
  );
};

export default Page;
