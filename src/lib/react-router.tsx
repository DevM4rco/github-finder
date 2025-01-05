import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../routes/Home';
import { UserRepositories } from '../routes/UserRepositories';
import App from '../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        element: <UserRepositories />,
        path: '/repos/:username',
      },
    ],
  },
]);
