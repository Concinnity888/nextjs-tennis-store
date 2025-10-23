import { FC, Suspense } from "react";
import Racket from "@/containers/Racket";
import { getRacketById } from "@/servises/getRacketById";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { getMetaRacketById } from "@/servises/getMetaRacketById";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;

  const { data } = await getMetaRacketById({ id: slug });

  if (!data) {
    return {
      title: 'Racket Page',
    }
  }

  return {
    title: data.name,
    description: data.description,
  }
};

const Page: FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const { data } = await getMetaRacketById({ id: slug });

  if (!data) {
    return notFound();
  }

  const { data: racket, isError } = await getRacketById({ id: slug });

  if (!isError && !racket) {
    return 'No result';
  }

  if (isError) {
    throw new Error("error");
  }

  if (!racket) {
    return notFound();
  }

  return (
    <Suspense>
      <Racket {...racket} />
    </Suspense>
  );
};

export default Page;
