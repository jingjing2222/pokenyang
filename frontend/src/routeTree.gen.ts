/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as MypageIndexImport } from './routes/mypage/index'
import { Route as HomeIndexImport } from './routes/home/index'
import { Route as BookmarkIndexImport } from './routes/bookmark/index'
import { Route as HomePostIdImport } from './routes/home/$postId'
import { Route as HomeUploadpostIndexImport } from './routes/home/uploadpost/index'
import { Route as HomePostIdCommentImport } from './routes/home/$postId/comment'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MypageIndexRoute = MypageIndexImport.update({
  id: '/mypage/',
  path: '/mypage/',
  getParentRoute: () => rootRoute,
} as any)

const HomeIndexRoute = HomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any)

const BookmarkIndexRoute = BookmarkIndexImport.update({
  id: '/bookmark/',
  path: '/bookmark/',
  getParentRoute: () => rootRoute,
} as any)

const HomePostIdRoute = HomePostIdImport.update({
  id: '/home/$postId',
  path: '/home/$postId',
  getParentRoute: () => rootRoute,
} as any)

const HomeUploadpostIndexRoute = HomeUploadpostIndexImport.update({
  id: '/home/uploadpost/',
  path: '/home/uploadpost/',
  getParentRoute: () => rootRoute,
} as any)

const HomePostIdCommentRoute = HomePostIdCommentImport.update({
  id: '/comment',
  path: '/comment',
  getParentRoute: () => HomePostIdRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/home/$postId': {
      id: '/home/$postId'
      path: '/home/$postId'
      fullPath: '/home/$postId'
      preLoaderRoute: typeof HomePostIdImport
      parentRoute: typeof rootRoute
    }
    '/bookmark/': {
      id: '/bookmark/'
      path: '/bookmark'
      fullPath: '/bookmark'
      preLoaderRoute: typeof BookmarkIndexImport
      parentRoute: typeof rootRoute
    }
    '/home/': {
      id: '/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof HomeIndexImport
      parentRoute: typeof rootRoute
    }
    '/mypage/': {
      id: '/mypage/'
      path: '/mypage'
      fullPath: '/mypage'
      preLoaderRoute: typeof MypageIndexImport
      parentRoute: typeof rootRoute
    }
    '/home/$postId/comment': {
      id: '/home/$postId/comment'
      path: '/comment'
      fullPath: '/home/$postId/comment'
      preLoaderRoute: typeof HomePostIdCommentImport
      parentRoute: typeof HomePostIdImport
    }
    '/home/uploadpost/': {
      id: '/home/uploadpost/'
      path: '/home/uploadpost'
      fullPath: '/home/uploadpost'
      preLoaderRoute: typeof HomeUploadpostIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface HomePostIdRouteChildren {
  HomePostIdCommentRoute: typeof HomePostIdCommentRoute
}

const HomePostIdRouteChildren: HomePostIdRouteChildren = {
  HomePostIdCommentRoute: HomePostIdCommentRoute,
}

const HomePostIdRouteWithChildren = HomePostIdRoute._addFileChildren(
  HomePostIdRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/home/$postId': typeof HomePostIdRouteWithChildren
  '/bookmark': typeof BookmarkIndexRoute
  '/home': typeof HomeIndexRoute
  '/mypage': typeof MypageIndexRoute
  '/home/$postId/comment': typeof HomePostIdCommentRoute
  '/home/uploadpost': typeof HomeUploadpostIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/home/$postId': typeof HomePostIdRouteWithChildren
  '/bookmark': typeof BookmarkIndexRoute
  '/home': typeof HomeIndexRoute
  '/mypage': typeof MypageIndexRoute
  '/home/$postId/comment': typeof HomePostIdCommentRoute
  '/home/uploadpost': typeof HomeUploadpostIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/home/$postId': typeof HomePostIdRouteWithChildren
  '/bookmark/': typeof BookmarkIndexRoute
  '/home/': typeof HomeIndexRoute
  '/mypage/': typeof MypageIndexRoute
  '/home/$postId/comment': typeof HomePostIdCommentRoute
  '/home/uploadpost/': typeof HomeUploadpostIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/home/$postId'
    | '/bookmark'
    | '/home'
    | '/mypage'
    | '/home/$postId/comment'
    | '/home/uploadpost'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/home/$postId'
    | '/bookmark'
    | '/home'
    | '/mypage'
    | '/home/$postId/comment'
    | '/home/uploadpost'
  id:
    | '__root__'
    | '/'
    | '/home/$postId'
    | '/bookmark/'
    | '/home/'
    | '/mypage/'
    | '/home/$postId/comment'
    | '/home/uploadpost/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  HomePostIdRoute: typeof HomePostIdRouteWithChildren
  BookmarkIndexRoute: typeof BookmarkIndexRoute
  HomeIndexRoute: typeof HomeIndexRoute
  MypageIndexRoute: typeof MypageIndexRoute
  HomeUploadpostIndexRoute: typeof HomeUploadpostIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomePostIdRoute: HomePostIdRouteWithChildren,
  BookmarkIndexRoute: BookmarkIndexRoute,
  HomeIndexRoute: HomeIndexRoute,
  MypageIndexRoute: MypageIndexRoute,
  HomeUploadpostIndexRoute: HomeUploadpostIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/home/$postId",
        "/bookmark/",
        "/home/",
        "/mypage/",
        "/home/uploadpost/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/home/$postId": {
      "filePath": "home/$postId.tsx",
      "children": [
        "/home/$postId/comment"
      ]
    },
    "/bookmark/": {
      "filePath": "bookmark/index.tsx"
    },
    "/home/": {
      "filePath": "home/index.tsx"
    },
    "/mypage/": {
      "filePath": "mypage/index.tsx"
    },
    "/home/$postId/comment": {
      "filePath": "home/$postId/comment.tsx",
      "parent": "/home/$postId"
    },
    "/home/uploadpost/": {
      "filePath": "home/uploadpost/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
