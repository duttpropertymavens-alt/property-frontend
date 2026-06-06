import { Link } from "react-router-dom";
import"../Navbar.css";
import{FaHome} from "react-icons/fa";


function Navbar (){
    return(
        <nav className="nav">
          <Link to="/" className="logo">
            <FaHome className="icon"/>
            Dutt Property<span id="estate"> Mavens</span> 
            </Link>
            
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/properties">Property</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/agents">Agents</Link>
          </div>
          {/* <div className="auth">
            <button className="signin"> Sign In</button>
            <button className="signup"> Sign Up</button>
          </div> */}
         </nav>
    );
}
export default Navbar;