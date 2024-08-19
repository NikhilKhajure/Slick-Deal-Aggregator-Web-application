import { useState } from 'react'
import Topnavbar from './Components/Navbar/Topnavbar'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Homepages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listofproduct from './Components/Listofproducts/Listofproduct';
import View from './Components/Productview/View';
import Kart from './Components/Kartproduct/Kart';
import Productdataprovider from './Productdata/Productdatacontext';
import Compareproducts from './Components/Kartproduct/Compareproducts';
import Signup from './Components/Authentication/Signup';
import Signin from './Components/Authentication/Signin';
function App() {
  return (
    <>
      <Productdataprovider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/listofproducts' element={<Listofproduct />} />
            <Route path='/viewproduct' element={<View />} />
            <Route path='/kart' element={<Kart />} />
            <Route path='/kart/compareproduct' element={<Compareproducts />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </Productdataprovider>
    </>
  )
}

export default App
