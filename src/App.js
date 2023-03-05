import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import Shiping from './components/Shiping/Shiping';
import PrivetRouter from './router/PrivetRouter';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element:<PrivetRouter> <Shop></Shop></PrivetRouter>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'orders',
          loader: productsAndCartLoader,
          element:<PrivetRouter> <Orders></Orders></PrivetRouter>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path:'/shiping',
          element:<PrivetRouter><Shiping></Shiping></PrivetRouter>
        },
        {
          path:'about',
          element:<PrivetRouter><About></About></PrivetRouter>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
