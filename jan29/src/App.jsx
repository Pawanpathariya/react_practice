import Layout from './Layout.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AboutCompany from './pages/aboutComp.jsx';
import AboutService from './pages/aboutService.jsx';
import AboutCompanyEmp from './pages/aboutEmp.jsx';
const App=()=>{
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='home' element={<Home/>} />

        <Route path="about" element={<About/>}>
        <Route index element={<AboutCompany/>}/>
          <Route path="company" element={<AboutCompany/>} />
          <Route path="service" element={<AboutService/>} />
          <Route path="employee" element={<AboutCompanyEmp/>} />        
        </Route>

        <Route path="contact" element={<Contact/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  
  )
}

export default App;