import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetails.css";

function PropertyDetails() {

  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [fullScreenImg, setFullScreenImg] = useState(null);

  useEffect(() => {

    fetch(`https://property-backend-lypz.onrender.com/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data.property);
      });

  }, [id]);

  if (!property) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-container">

   <>
  {/* 1. Grid Wali Photos (Ab Inpe Click Hoga) */}
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginBottom: "20px" }}>
    {property.image && Array.isArray(property.image) ? (
      property.image.map((imgUrl, index) => (
        <img
          key={index}
          src={imgUrl}
          alt={`Property photo ${index + 1}`}
          className="details-image"
          onClick={() => setFullScreenImg(imgUrl)}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", cursor: "pointer" }}
        />
      ))
    ) : (
      <img 
        src={property.image} 
        alt="Property" 
        className="details-image" 
        onClick={() => setFullScreenImg(property.image)}
        style={{ width: "100%", height: "auto", display: "block", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", cursor: "pointer" }} 
      />
    )}
  </div>

  {/* 2. Full Screen Wala Black Box (Jab Photo par click hoga tabhi dikhega) */}
  {fullScreenImg && (
    <div 
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.9)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" }}
      onClick={() => setFullScreenImg(null)}
    >
      <span style={{ position: "absolute", top: "20px", right: "40px", color: "white", fontSize: "50px", cursor: "pointer" }}>&times;</span>
      <img src={fullScreenImg} style={{ maxHeight: "90%", maxWidth: "90%", objectFit: "contain" }} alt="Full Screen" />
    </div>
  )}
</>

      <h1>{property.title}</h1>

      <p>{property.location}</p>

      <h2>₹ {property.price}</h2>
      <p>{property.description}</p>

    </div>
  );
}

export default PropertyDetails;