import { useEffect } from "react";
import { Link } from "react-router-dom";

function Construction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "1. Construction Planning",
      description:
        "Smart project planning with detailed layouts, budgeting, and timelines for smooth execution.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "2. Site Work",
      description:
        "Expert site preparation, excavation, foundation work, and infrastructure development.",
      image:
        "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "3. Renovation Services",
      description:
        "Upgrade and transform existing spaces with modern designs and quality craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "4. Finishing Services",
      description:
        "Premium flooring, painting, electrical, plumbing, and final detailing for a perfect finish.",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
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
          Construction Service
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
          Complete construction planning, site work, renovation, and finishing
          services — delivered with precision, quality, and trust.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
          alt="Construction"
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

      {/* CTA BUTTON */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
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
              marginRight: "20px",
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

export default Construction;