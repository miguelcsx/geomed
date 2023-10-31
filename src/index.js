import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// routes
import App from './routes/App';
import ErrorPage from './routes/error-page';
import Basics from './routes/basics';
import BasicPostulates from './routes/basics/postulates';
import OrderPostulates from './routes/basics/postulates/Order';
import LinkingPostulates from './routes/basics/postulates/Incidence';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/basics',
    element: <Basics/>
  },
  {
    path: '/basics/postulates',
    element: <BasicPostulates/>
  },
  {
    path: '/basics/postulates/order',
    element: <OrderPostulates/>
  },
  {
    path: "/basics/postulates/incidence",
    element: <LinkingPostulates/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);