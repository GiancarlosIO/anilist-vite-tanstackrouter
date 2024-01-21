import { SearchAnimePage } from '@/pages/SearchAnime';
import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_layout/search/anime/').createRoute({
  component: SearchAnimePage,
});
