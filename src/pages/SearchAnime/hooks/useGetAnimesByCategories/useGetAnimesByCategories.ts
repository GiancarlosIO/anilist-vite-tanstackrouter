import { useSearchAnimeInitialAnimesQueryQuery } from './GetAnimes.generated';

export type { MediaFragment } from './GetAnimes.generated';

export function useGetAnimesByCategories() {
  const result = useSearchAnimeInitialAnimesQueryQuery();
  return result;
}
