import { Outlet } from '@tanstack/react-router';

import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/_layout').createRoute({
  component: IndexLayout,
});

function IndexLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
