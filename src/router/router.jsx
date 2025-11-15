import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/HomePage/Home';
import Books from '../Pages/Books/Books';
import AddBook from '../Pages/AddBook/AddBook';
import Cart from '../Pages/Cart/Cart';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/books',
            element: <Books />
        },
        {
            path: '/add-book',
            element: <AddBook />
        },
        {
            path: '/cart',
            element: <Cart />
        }
    ],
  },
]);
