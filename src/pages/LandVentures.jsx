import { useEffect } from "react";
import { Link } from "react-router-dom";

function LandVentures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "1. Land Dealing",
      description:
        "Buy and sell residential, commercial, and investment plots with complete transparency.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "2. Plot Development",
      description:
        "Well-planned plotting solutions with clear layouts and future-ready infrastructure.",
      image:
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "3. Investment Guidance",
      description:
        "Expert advice to help you choose profitable and secure land investment opportunities.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "4. Site Visit Assistance",
      description:
        "Guided site visits with trusted support for confident and informed property decisions.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div
      style={{
        background: "#f7f6f3",
        color: "#142e63",
        minHeight: "100vh",
        padding: "60px 40px",
      }}
    >
      {/* HERO SECTION */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "50px", color: "#d8b13f", marginBottom: "15px" }}>
          Land Ventures Service
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#142e63",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "30px",
          }}
        >
          Land dealing, plotting, investment guidance, site visits, and trusted
          support — helping you make smart land decisions with confidence.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
          alt="Land Ventures"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          }}
        />
      </div>

      {/* SERVICE CARDS */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: "480px",
              background: "white",
              borderRadius: "15px",
              overflow: "hidden",
              border: "1px solid orange",
              boxShadow: "0 4px 15px rgba(0,0,0,0.07)",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: "#d8b13f",
                  fontSize: "22px",
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: "#142e63", lineHeight: "28px", fontSize: "16px" }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA BUTTONS */}
      <div
        style={{
          textAlign: "center",
          marginTop: "60px",
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <a href="https://wa.me/919034021217" target="_blank" rel="noreferrer">
          <button
            style={{
              padding: "15px 40px",
              background: "#d8b13f",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#142e63",
              cursor: "pointer",
            }}
          >
            Contact on WhatsApp
          </button>
        </a>
        <Link to="/services">
          <button
            style={{
              padding: "15px 40px",
              background: "transparent",
              border: "2px solid #142e63",
              borderRadius: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#142e63",
              cursor: "pointer",
            }}
          >
            All Services
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandVentures;