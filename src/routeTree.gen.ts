// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PanelImport } from './routes/panel'
import { Route as NotFoundImport } from './routes/not-found'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as PanelEmployeeImport } from './routes/panel.employee'
import { Route as LayoutSearchAnimeImport } from './routes/_layout/search.anime'
import { Route as LayoutAnimeAnimdIdAnimeSlugImport } from './routes/_layout/anime.$animdId.$animeSlug'

// Create/Update Routes

const PanelRoute = PanelImport.update({
  path: '/panel',
  getParentRoute: () => rootRoute,
} as any)

const NotFoundRoute = NotFoundImport.update({
  path: '/not-found',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const PanelEmployeeRoute = PanelEmployeeImport.update({
  path: '/employee',
  getParentRoute: () => PanelRoute,
} as any)

const LayoutSearchAnimeRoute = LayoutSearchAnimeImport.update({
  path: '/search/anime',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAnimeAnimdIdAnimeSlugRoute =
  LayoutAnimeAnimdIdAnimeSlugImport.update({
    path: '/anime/$animdId/$animeSlug',
    getParentRoute: () => LayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/not-found': {
      preLoaderRoute: typeof NotFoundImport
      parentRoute: typeof rootRoute
    }
    '/panel': {
      preLoaderRoute: typeof PanelImport
      parentRoute: typeof rootRoute
    }
    '/panel/employee': {
      preLoaderRoute: typeof PanelEmployeeImport
      parentRoute: typeof PanelImport
    }
    '/_layout/': {
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/search/anime': {
      preLoaderRoute: typeof LayoutSearchAnimeImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/anime/$animdId/$animeSlug': {
      preLoaderRoute: typeof LayoutAnimeAnimdIdAnimeSlugImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  LayoutRoute.addChildren([
    LayoutIndexRoute,
    LayoutSearchAnimeRoute,
    LayoutAnimeAnimdIdAnimeSlugRoute,
  ]),
  NotFoundRoute,
  PanelRoute.addChildren([PanelEmployeeRoute]),
])
