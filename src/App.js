import React from 'react'
import CreateUpdateForm from './Components/CreateUpdateForm'
import ProductList from './Components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductList/>} />
            <Route path='/create' element={<CreateUpdateForm/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
