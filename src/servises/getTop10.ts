import { IRacket } from '@/types/racket';
import { Response } from '@/types/response';

export const getTop10 = async (): Promise<Response<IRacket[]>> => {
  const result = await fetch('http://localhost:4000/api/top-10', {
    next: {
      revalidate: 5,
      tags: ['getTop10'],
    },
  });

  if (!result.ok) {
    return {
      isError: true,
      data: undefined,
    };
  }

  const data: IRacket[] = await result.json();
  return {
    isError: false,
    data,
  };
};
