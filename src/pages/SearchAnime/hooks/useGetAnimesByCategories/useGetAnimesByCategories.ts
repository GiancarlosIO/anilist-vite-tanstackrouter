import { useSearchAnimeInitialAnimesQueryQuery } from './GetAnimes.generated';

export type { MediaFragmentFragment } from './GetAnimes.generated';

export function useGetAnimesByCategories() {
  const result = useSearchAnimeInitialAnimesQueryQuery();
  return result;
}
