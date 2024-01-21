import { RouteApi } from '@tanstack/react-router';

// export const Route = new FileRoute(
//   '/_layout/anime/$animeId/$animeSlug/anime/$animeId/$animeSlug'
// ).createRoute({
//   component: AnimePageRoute,
//   // loader({ params }) {
//   //   console.log({ params });
//   //   // @ts-expect-error todo
//   //   if (params['**']) {
//   //     console.log('redirect to 404');
//   //     return redirect({
//   //       to: '/not-found',
//   //     });
//   //   }
//   //   return {};
//   // },
// });

const routeApi = new RouteApi({ id: '/_layout/anime/$animeId/$animeSlug' });

export function component() {
  const params = routeApi.useParams();

  return (
    <div>
      {params.animeId} - {params.animeSlug}
    </div>
  );
}
