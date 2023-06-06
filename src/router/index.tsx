import { RouteObject } from 'react-router-dom';
import App from '../App';
import DefaultLayout from '../components/layout/DefaultLayout/DefaultLayout';
import { RoutePath } from '../constants/routes';
import IndexPage from 'page';

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
            element: <IndexPage />
          }
        ]
      }
    ]
  }
];

export default routesConfig;
