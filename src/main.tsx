import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './scss/main.scss';

import App from './App';
import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import ViewClient, { loader as viewClientLoader } from './pages/ViewClient';
import AddClient from './pages/AddClient';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <div className="mt-2">
            Navigate to <code>/admin/view-clients</code> or{' '}
            <code>/admin/add-client</code>
          </div>
        )
      },
      {
        path: 'view-clients',
        element: <ViewClient />,
        loader: viewClientLoader
      },
      { path: 'add-client', element: <AddClient /> }
    ]
  }
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
