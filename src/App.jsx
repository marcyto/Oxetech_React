import React from 'react';
import './App.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home';
import Sobre from './routes/Sobre';
import Contato from './routes/Contato';


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
    }


  ])


  return(
    <RouterProvider router={rotas} />
  )
  
}

export default App;
