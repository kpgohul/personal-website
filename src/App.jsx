
import './App.css'
import Herosection from './Background/image'
import Aboutsection from './Aboutsection.jsx/aboutsection'
import Contactsection from './Contactsection/contactsection'
import Servicesection from './Servicesection/Servicesection'
import Projectsection from './Projectsection/Projectsection'

import CustomNavbar from './navbar/components/Drawer'

function App() {
  return (
    <>

<CustomNavbar/>
    <Herosection/>
    <Aboutsection/>
    <Projectsection/>
    <Servicesection/>
    <Contactsection/>
    </>
  )
}

export default App
