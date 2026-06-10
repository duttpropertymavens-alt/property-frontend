import { useState, useEffect } from "react";

function Property() {
  // 1. State jisme backend se aane wali saari properties save hongi
  const [properties, setProperties] = useState([]);

  // 2. useEffect jo Render backend se saara data lekar aayega
  useEffect(() => {
    fetch("https://property-backend-of4t.onrender.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div
      style={{
        background: "#f7f6f3",
        color: "#142e63",
        minHeight: "100vh",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "#d8b13f",
          marginBottom: "20px",
        }}
      >
        Our Properties
      </h1>

      <p
        style={{
          color: "#142e63",
          maxWidth: "800px",
          lineHeight: "30px",
          marginBottom: "50px",
          fontSize: "18px",
        }}
      >
        Explore our premium collection of luxury villas, modern apartments,
        commercial offices, and dream homes available in top locations across India.
      </p>

      {/* Container jisme saare cards dynamic show honge */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {properties.length > 0 ? (
          properties.map((item) => (
            <div
              key={item._id}
              style={{
                width: "300px",
                background: "#f7f6f3",
                border: "1px solid orange",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                // Agar item me image ka link hai toh woh aayega, nahi toh fallback image dikhegi
                src={item.image || "https://images.unsplash.com/photo-144863060428-65456885c650?w=600"}
                alt={item.title || "Property"}
                style={{
                  width: "100%",
                  height: "222px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h2 style={{ color: "#d8b13f", margin: "0 0 10px 0" }}>
                  {item.title}
                </h2>
                <p style={{ margin: "0 0 10px 0", color: "#142e63" }}>
                  {item.location}
                </p>
                <h3 style={{ margin: "0 0 15px 0" }}>
                  {/* Agar price me text h jaise '1.2 CR' ya number, dono chalega */}
                  ₹{item.price}
                </h3>

                <button
                  onClick={() => {
                    alert(`${item.title}\nLocation: ${item.location}\nPrice: ${item.price}`);
                  }}
                  style={{
                    background: "#d8b13f",
                    color: "#142e63",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          // Agar database me abhi koi data load nahi hua ya empty h
          <p style={{ color: "#142e63" }}>Loading properties or database is empty...</p>
        )}
      </div>
    </div>
  );
}

export default Property;