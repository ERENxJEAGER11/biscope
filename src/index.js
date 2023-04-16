import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App';

import { Actors, MovieInformation, Movies, Profile } from './components/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/movie/:id',
        element: <MovieInformation />,
      },
      {
        path: '/actors/:id',
        element: <Actors />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
