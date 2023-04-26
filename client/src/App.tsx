import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'

import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { ContactUs } from './pages/ContactUs'
import { NavbarCustomer } from './components/NavbarCustomer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import backgroundTexture from '/imgs/bgTexture.jpg';
import { Footer } from './components/Footer'
import { ProductDetails } from './components/ProductDetails'
import { LoginChoice } from './pages/LoginChoice'
import { CustomerLogin } from './pages/CustomerLogin'
import { VendorLogin } from './pages/VendorLogin'
import { Registration } from './pages/Registration'
import { VendorPostProduct } from './pages/VendorPostProduct'
import { Navbar } from './components/Navbar'
import { NavbarVendor } from './components/NavbarVendor'

function App() {

  const bgImageStyle = {
    backgroundImage: `url(${backgroundTexture})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const [loggedInUserType, setLoggedInUserType] = useState("base");

  function handleLoginCustomer() {
    setLoggedInUserType("customer");
  }

  function handleLoginVendor() {
    setLoggedInUserType("vendor");
  }

  function handleLogout() {
    setLoggedInUserType("base");
  }

  //console.log("heelo there")
  //console.log(loggedInUserType)

  return (
    <ShoppingCartProvider>
      
      {loggedInUserType === 'customer' && <NavbarCustomer onLogout={handleLogout}/>}
      {loggedInUserType === 'vendor' && <NavbarVendor onLogout={handleLogout}/>}
      {loggedInUserType === 'base' && <Navbar />}

      <div style={bgImageStyle}>
        <Container className='pb-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path='/store/:productId' element={<ProductDetails />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/login-choice' element={<LoginChoice />} />
            <Route path='/customer-login' element={<CustomerLogin onLogin={handleLoginCustomer}/>} />
            <Route path='/vendor-login' element={<VendorLogin onLogin={handleLoginVendor}/>} />
            <Route path='/registration-page' element={<Registration />} />
            <Route path='/post-product' element={<VendorPostProduct />} />
          </Routes>
        </Container>
      </div>
      <Footer />

    </ShoppingCartProvider>
  )
}

export default App
