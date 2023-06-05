import { RouteObject } from "react-router-dom";
import App from "../App";
import DefaultLayout from "../components/layout/DefaultLayout/DefaultLayout";
import { RoutePath } from "../constants/routes";
import HomePage from "../page/home";

const routesConfig: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <App />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: RoutePath.Index,
            element: <HomePage />,
          },
          {
            path: RoutePath.Home,
            element: <HomePage />,
          },
          {
            path: RoutePath.Features,
            element: <HomePage />,
          },
          {
            path: RoutePath.Resume,
            element: <HomePage />,
          },

          {
            path: RoutePath.Blog,
            element: <HomePage />,
          },
          {
            path: RoutePath.Contact,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
];

export default routesConfig;
