import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute(
  '/_layout/anime/$animeId/$animeSlug'
).createRoute({
  component: AnimePageRoute,
  // loader({ params }) {
  //   console.log({ params });
  //   // @ts-expect-error todo
  //   if (params['**']) {
  //     console.log('redirect to 404');
  //     return redirect({
  //       to: '/not-found',
  //     });
  //   }
  //   return {};
  // },
});

function AnimePageRoute() {
  return <div>Anime detail page</div>;
}
