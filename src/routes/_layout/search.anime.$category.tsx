import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute(
  '/_layout/search/anime/$category'
).createRoute({
  component: () => <h1>Trending anime</h1>,
});
