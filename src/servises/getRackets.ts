import { IRacket } from '@/types/racket';
import { Response } from '@/types/response';

export const getRackets = async ({ limit = 20, page = 1 }): Promise<Response<IRacket[]>> => {
  const result = await fetch(`http://localhost:4000/api/products?page=${page}&limit=${limit}`);

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
