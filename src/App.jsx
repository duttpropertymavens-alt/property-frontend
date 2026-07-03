import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Services from "./pages/Services";
import About from "./pages/About";
import Agents from "./pages/Agents";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Architecture from "./pages/Architecture";
import SmartHome from "./pages/SmartHome";
import Interior from "./pages/Interior";
import Villa from "./pages/Villa";
import Flat from "./pages/Flat";
import Apartment from "./pages/Apartment";
import Office from "./pages/Office";
import Admin from "./pages/Admin";
import PropertyDetails from "./pages/PropertyDetails";
import ForgotPasswordPage from './pages/ForgetPassword';
import Construction from './pages/Construction';


function App (){
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
 <Route path="/" element={<Home />} />

<Route path="/properties" element={<Property />} />

<Route path="/services" element={<Services />} />

<Route path="/about" element={<About />} />

<Route path="/agents" element={<Agents />} />
<Route path="/contact" element={<Contact />} />
<Route path="/architecture" element={<Architecture />} />
<Route path="/smarthome" element={<SmartHome/>}/>
<Route path="/interior" element={<Interior />} />
<Route path="/villa" element={<Villa />} />
<Route path="/flat" element={<Flat />} />
<Route path="/apartment" element={<Apartment />} />
<Route path="/office" element={<Office />} />
<Route path="/admin" element={<Admin />} />
<Route path="/property/:id" element={<PropertyDetails />} />
 <Route path="/forget-password" element={<ForgotPasswordPage />} />
 <Route path="/construction" element={<Construction />} />


  
    </Routes>
    </BrowserRouter>
  )
}
export default App;