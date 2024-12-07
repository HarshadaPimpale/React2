import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


import Home from './Home';
import Product from './Product';
import RootLayout from './RootLayout';
import { Children } from 'react';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/product', element: <Product /> },
      { path: '/contact', element: <Contact /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
