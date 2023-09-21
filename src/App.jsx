import React from 'react';
import './App.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';
import Login from './routes/login';


function App() {


  const rotas = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/sobre',
      element: <Sobre />
    },
    {
      path: '/contato',
      element: <Contato/>
    },
    {
      path: '/login',
      element: <Login/>,
    }


  ])


  return(
    <RouterProvider router={rotas} />
  )
  
}

export default App;
