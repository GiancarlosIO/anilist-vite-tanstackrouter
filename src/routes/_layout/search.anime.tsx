import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_layout/search/anime').createRoute({
  component: SearchAnimeRoute,
});

function SearchAnimeRoute() {
  return <div>Search anime</div>;
}
