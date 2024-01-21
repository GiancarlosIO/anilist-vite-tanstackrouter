import { RouteApi } from '@tanstack/react-router';

const routeApi = new RouteApi({ id: '/_layout/search/anime/$category' });

export const component = () => {
  const params = routeApi.useParams();

  return <div>{params.category}</div>;
};
