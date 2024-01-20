import { FileRoute, Outlet } from '@tanstack/react-router';

export const Route = new FileRoute('/panel').createRoute({
  component: PanelRoute,
});

function PanelRoute() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
