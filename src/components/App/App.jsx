import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../UserPanel/Auth'
import AuthAdmin from '../AdminPanel/AuthAdmin'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/admin' element={<AuthAdmin/>}/>
    </Routes>

  )
}

export default App