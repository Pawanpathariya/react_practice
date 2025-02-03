import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Contact from "./Pages/Contact"




const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="product" element={<Product/>} />
        <Route path="contact" element={<Contact/>} />
        
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App