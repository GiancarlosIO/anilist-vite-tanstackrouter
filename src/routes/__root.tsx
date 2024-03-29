import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Link, Outlet, RootRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = new RootRoute({
  component: RootComponentRoute,
});

function RootComponentRoute() {
  const linkClass =
    'px-4 py-2 data-[status=active]:text-teal-300 data-[status=active]:underline';
  return (
    <>
      <header className="bg-teal-950">
        <nav className="container mx-auto flex justify-between items-center text-white">
          <img src="/logo.svg" width={50} height={50} />
          <div className="flex gap-4">
            <Link className={linkClass} to="/">
              Home
            </Link>
            <Link className={linkClass} to="/search/anime">
              Search
            </Link>
            <ThemeSwitcher />
          </div>
        </nav>
      </header>
      <div className="bg-teal-50 h-full">
        <div className="container mx-autoh-full">
          <Outlet />
        </div>
      </div>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
