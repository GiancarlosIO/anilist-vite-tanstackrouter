import { FileRoute, Link } from '@tanstack/react-router';

export const Route = new FileRoute('/not-found').createRoute({
  component: () => (
    <>
      <h1>Not found - 404</h1>
      <Link to="/">Go back</Link>
    </>
  ),
});
