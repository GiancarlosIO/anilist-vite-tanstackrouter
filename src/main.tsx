import './index.css';
import { ApolloProvider } from '@apollo/client';
import { NotFoundRoute, Router, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { client } from './lib/apollo/client';
import { Route as rootRoute } from './routes/__root';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <div>Not found - 404</div>,
});

// Create a new router instance
const router = new Router({ routeTree, notFoundRoute });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// set theme
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
