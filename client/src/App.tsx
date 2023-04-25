import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { ContactUs } from './pages/ContactUs'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import backgroundTexture from '/imgs/bgTexture.jpg';
import { Footer } from './components/Footer'
import { ProductDetails } from './components/ProductDetails'

function App() {

  const bgImageStyle = {
    backgroundImage: `url(${backgroundTexture})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <ShoppingCartProvider>
      <Navbar />

      <div style={bgImageStyle}>
      <Container className='pb-4'>
          <Routes>
            <Route path='/' element = { <Home /> } />
            <Route path="/store" element = { <Store /> } />
            <Route path='/store/:productId' element = { <ProductDetails /> } />
            <Route path='/contact-us' element = { <ContactUs /> } />
          </Routes>
      </Container>
      </div>
      <Footer />
      
    </ShoppingCartProvider>
  )
}

export default App
