import React, { useState } from 'react';
import './App.css'
import Banner from './components/Banner';

import Formulario from './components/formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const AddColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]) 
  }


  return (
    
    <div >
      <Banner />
      <div className='container'>
      <Formulario novoColaborador={colaborador => AddColaborador(colaborador)} />
      </div>
      
      
    </div>
  )
}

export default App;
