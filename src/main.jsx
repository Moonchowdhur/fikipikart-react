import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import { customloader } from './components/loader/customloader';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
 
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/shop",
        element:<Shop></Shop>,
        loader:()=>fetch("product.json")
      },
      {
        path: "/review", 
        element:<OrderReview></OrderReview>,
        loader:customloader
        
      },
      {
        path: "/checkout",
        element:<h2>Here Checkout page</h2>,
          
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
