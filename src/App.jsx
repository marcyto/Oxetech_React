import React, { useState } from 'react';
import './App.css'
import Banner from './components/Banner';

import Formulario from './components/formulario';
import Time from './components/time';

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
        <Time nome="Programação" />
        <Time nome="FrontEnd" />
        <Time nome="Data Science" />
      </div>


    </div>
  )
}

export default App;
