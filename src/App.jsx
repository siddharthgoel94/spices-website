import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import Navbar from './Components/Common/Navbar/Navbar'
import Landing from './Components/Landing_Page/Landing'
import Footer from './Components/Footer/Footer'
import Product_Display from './Components/Product_Display/Product_Display'
import Recipe from './Components/Common/Recipe/Recipe'
import Contact_Us from './Components/Contact_Us/Contact_Us'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar />
     
      <Routes>
     
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/products' element={<Product_Display/>}/>
          <Route exact path='/recipes' element={<Recipe itemsPerPage={6}/>}/>
          <Route exact path='/contact-us' element={<Contact_Us/>}/>
        </Routes>
      
      </Router>
     <Footer/>
     
    </>
  )
}

export default App
