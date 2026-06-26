import "../Home.css";
import heroImg from "../assets/hero-img-2.jpeg";
import {FaStar} from "react-icons/fa"
import addressImg from "../assets/address.jpeg"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FaBuilding, FaUsers } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Home() {
  const [properties, setProperties] = useState([]);

 

  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  message: "",
});
const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    // Koi FormData ka jhanjhat nahi, direct saaf-sutra data
    const requestData = {
      access_key: "tfp_Hp3Lz6gexLWFGsbQKmnJmyJZL4XWwFPuSh2eXbAKFQFt_3mM4ENEcBJvWQG",
      name: formData.name,
      phone: formData.phone,
      message: formData.message
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      const result = await response.json();

      if (result.success || response.status === 200) {
        alert("Message Sent Successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert("Failed To Send");
      }
    } catch (error) {
      alert("Server Error!");
    }
  };

useEffect(() => {

  fetch("https://property-backend-lypz.onrender.com/properties")
    .then((res) => res.json())
    .then((data) => setProperties(data));

}, []);
  return(
    <>
    <div className="hero">

      {/* LEFT */}
      <div className="hero-left">
        <h1>Easiest way to get your <span className="dream">dream</span> <span className="hero-home">home</span></h1>
       <p>Find best properties with us. Buy, sell and invest smartly.</p>
        <div className="hero-buttons">
      <Link to="/contact">
  <button className="btn-primary">
    Contact Us
  </button>
</Link>

<Link to="/properties">
  <button className="btn-secondary">
    View Projects
  </button>
</Link>
<div className="find-property">
  <h3>Find the Perfect Property</h3>
        <p>Explore premium homes and investment opportunities with expert guidance, trusted services, and the best locations to help you make smart real estate decisions.</p>

</div>
       </div>
         <div className="mini-card">
        <img src={addressImg} alt="Location"/>
        <div>
          <h4>Our Location</h4>
          <p>Panipat , Haryana</p>
        </div>
      </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">

        <div className="image-box">
          <img src={heroImg} alt="property" className="hero-img" />
          <h2 className="premium"><ul>
            <li>Premium Properties In Haryana</li>
            <li>Your Dream Home Await</li>
            <li>Panipat's Trusted Property Dealer</li>
            </ul></h2>
        </div>
         {/* Ye raha aapka stats wala section jo sidha right mein jayega */}
    
      </div>
      
      </div>
     <div className="state" style={{ display: "flex", flexDirection: "row", gap: "50px", justifyContent: "center", width: "100%" ,background: "#f7f6f3" }}>
  
  <div className="stat-card">
    <div className="stat-icon">
      <FaBuilding />
    </div>
    <h3>2k+</h3>
    <p>Property Delivered</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">
      <FaUsers />
    </div>
    <h3>2k+</h3>
    <p>Happy Clients</p>
  </div>

  <div className="stat-card">
    <div className="stat-icon">
      <FaStar />
    </div>
    <h3>
      4.5 <FaStar className="rating-star" />
    </h3>
    <p>Star Ratings</p>
  </div>

</div>
      <section className="services">

  <div className="services-heading">
    <p>WHAT WE OFFER</p>
    <h2>
      Our <span>Premium</span> Services
    </h2>

    <h5>
      End to end real estate solutions tailored for your lifestyle.
    </h5>
  </div>

  <div className="services-grid">

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop" />

      <h3>Buying / Selling / Renting Pro</h3>

      <p>
        Trusted support for buying, selling, and renting properties with clear
        guidance.
      </p>

      <Link to="/properties">
  <button>Read More</button>
</Link>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" />

      <h3>Construction Service</h3>

      <p>
        Complete construction planning, site work, renovation, and finishing
        services.
      </p>

      <Link to="/services">
      <button>Read More</button>
      </Link>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop" />

      <h3>Land Ventures Service</h3>

      <p>
        Land dealing, plotting, investment guidance, site visits, and trusted
        support.
      </p>

      <Link to="/services">
  <button>Read More</button>
</Link>
    </div>

    <div className="service-card">
      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" />

      <h3>Documentation Verification</h3>

      <p>
        Property papers, ownership records, and deal documents checked with
        careful guidance.
      </p>

      <Link to="/contact">
  <button>Read More</button>
</Link>
    </div>

  </div>
</section>
<section className="properties">

  <div className="properties-heading">
    <p>FEATURED PROPERTIES</p>

    <h2>
      Our <span>Luxury</span> Projects
    </h2>
  </div>
<section className="projects">

 

  <div className="property-container">

    {properties.map((item) => (
      <div className="property-card" key={item.id}>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
  {/* Check if image exists AND is an array before mapping */}
  {item.image && Array.isArray(item.image) && item.image.map((imgUrl, index) => (
    <SwiperSlide key={index}>
      {/* Fallback image incase URL is broken */}
      <img 
  src={imgUrl || "path/to/default/image.jpg"} 
  alt={item.title} 
  className="property-image" 
  style={{ width: "100%", height: "250px", objectFit: "contain", backgroundColor: "#f0f0f0" }} 
/>
    </SwiperSlide>
  ))}
</Swiper>

        <h2>{item.title}</h2>
        

<p>{item.location}</p>

<h3>{item.price}</h3>

<Link to={`/property/${item._id}`} className="details-btn">
  View Details
</Link>

      </div>
    ))}

  </div>

</section>
  

 
</section>

{/* ABOUT SECTION */}

<section className="about">

  <div className="about-left">
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
      alt=""
    />
  </div>

  <div className="about-right">

    <p className="about-tag">ABOUT US</p>

    <h2>
      Trusted <span>Real Estate</span> Company
    </h2>

    <p className="about-text">
      We provide premium real estate solutions in Panipat with modern
      architecture, luxury interiors and trusted property consultation.
    </p>

    <div className="about-boxes">

      <div className="about-box">
        <h3>10+</h3>
        <p>Years Experience</p>
      </div>

      <div className="about-box">
        <h3>2000+</h3>
        <p>Happy Clients</p>
      </div>

      <div className="about-box">
        <h3>120+</h3>
        <p>Projects Completed</p>
      </div>

    </div>

    <Link to="/about">
  <button className="about-btn">
    Know More
  </button>
</Link>

  </div>

</section>
{/* WHY CHOOSE US */}

<section className="choose">

  <p className="choose-tag">WHY CHOOSE US</p>

  <h2 className="why-clients">
    Why Clients <span>Trust Us</span>
  </h2>

  <div className="choose-container">

    <div className="choose-card">
      <h3>Trusted Dealer</h3>

      <p>
        100% genuine and trusted property consultation in Panipat.
      </p>
    </div>

    <div className="choose-card">
      <h3>Premium Properties</h3>

      <p>
        Luxury villas, apartments and commercial spaces available.
      </p>
    </div>

    <div className="choose-card">
      <h3>Best Pricing</h3>

      <p>
        Affordable and transparent pricing with no hidden charges.
      </p>
    </div>

    <div className="choose-card">
      <h3>24/7 Support</h3>

      <p>
        Our team is always ready to help you anytime.
      </p>
    </div>

  </div>

</section>
<section className="contact">

  <p className="contact-tag">CONTACT US</p>

  <h2 className="h2-contact">
    Get In <span>Touch</span>
  </h2>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Dutt Property Mavens</h3>

      <p>📍 Panipat, Haryana</p>
      <p>📞 +91 9034021217</p>
      <p>📧 duttpropertymavens@gmail.com</p>
    </div>

    <form className="contact-form" onSubmit={handleSubmit}>

      <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
/>

      <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Your Phone Number"
/>

      <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Your Message"
></textarea>

     <button>Send Message</button>

    </form>

  </div>

</section>
<footer className="footer">

  <div className="footer-container">

    <div className="footer-box">
      <h2>Dutt <span>Property</span> <span>Mavens</span></h2>

      <p>
        Premium real estate solutions in Panipat with modern luxury
        designs and trusted consultation.
      </p>
    </div>

  <div className="footer-box">
  <h3>Quick Links</h3>

  <Link to="/">Home</Link>
  <Link to="/services">Services</Link>
  <Link to="/properties">Projects</Link>
  <Link to="/about">About</Link>
  <Link to="/agents">Agents</Link>
</div>

    <div className="footer-box">
      <h3>Contact Info</h3>

      <p>📍 Panipat, Haryana</p>
      <p>📞 +91 9034021217</p>
      <p><span>📧</span>duttpropertymavens@gmail.com</p>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Dutt Property Mavens | All Rights Reserved
  </div>

</footer>

    </>
  )
}

export default Home;