import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_layout/').createRoute({
  component: IndexRoute,
});

function IndexRoute() {
  return <div className="p-2">Home</div>;
}
