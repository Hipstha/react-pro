import { JSX, lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  path: string,
  name: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/',
    path:'/',
    Component: ShoppingPage,
    name: 'Shopping Store'
  }
  // {
  //   to: '/lazyload',
  //   path: '/lazyload/*',
  //   Component: LazyLayout,
  //   name: 'Lazyload Dashboard'
  // },
  // {
  //   to: '/no-lazy',
  //   path: 'no-lazy',
  //   Component: NoLazy,
  //   name: 'No Lazy'
  // }
]